package com.internmanagement.controller;

import com.internmanagement.entity.Intern;
import com.internmanagement.service.InternService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/interns")
public class InternController {

    @Autowired
    private InternService internService;

    @PostMapping
    public Intern addIntern(@RequestBody Intern intern,
                            @RequestParam Long batchId) {
        return internService.addIntern(intern, batchId);
    }

    @GetMapping
    public List<Intern> getAllInterns() {
        return internService.getAllInterns();
    }

    @PutMapping("/{id}")
    public Intern updateIntern(@PathVariable Long id,
                               @RequestBody Intern intern) {
        return internService.updateIntern(id, intern);
    }

    @DeleteMapping("/{id}")
    public String deleteIntern(@PathVariable Long id) {
        internService.deleteIntern(id);
        return "Intern deleted successfully";
    }

    @GetMapping("/search")
    public List<Intern> search(@RequestParam String name) {
        return internService.searchByName(name);
    }

    @GetMapping("/filter/batch")
    public List<Intern> filterByBatch(@RequestParam Long batchId) {
        return internService.filterByBatch(batchId);
    }

    @GetMapping("/filter/type")
    public List<Intern> filterByType(@RequestParam String type) {
        return internService.filterByType(type);
    }
}