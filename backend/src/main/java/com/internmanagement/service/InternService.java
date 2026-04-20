package com.internmanagement.service;

import com.internmanagement.entity.Batch;
import com.internmanagement.entity.Intern;
import com.internmanagement.repository.BatchRepository;
import com.internmanagement.repository.InternRepository;
import com.internmanagement.utils.IdGenerator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InternService {

    @Autowired
    private InternRepository internRepository;

    @Autowired
    private BatchRepository batchRepository;

    // ✅ ADD INTERN
    public Intern addIntern(Intern intern, Long batchId) {

        Batch batch = batchRepository.findById(batchId)
                .orElseThrow(() -> new RuntimeException("Batch not found"));

        int count = internRepository.countByDateOfJoining(intern.getDateOfJoining()) + 1;

        String internId = IdGenerator.generateInternId(
                intern.getIdCardType(),
                intern.getDateOfJoining(),
                count
        );

        intern.setInternId(internId);
        intern.setBatch(batch);

        return internRepository.save(intern);
    }

    // ✅ GET ALL
    public List<Intern> getAllInterns() {
        return internRepository.findAll();
    }

    // ✅ DELETE
    public void deleteIntern(Long id) {
        internRepository.deleteById(id);
    }

    // ✅ UPDATE
    public Intern updateIntern(Long id, Intern updatedIntern) {

        Intern intern = internRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Intern not found"));

        intern.setName(updatedIntern.getName());
        intern.setEmail(updatedIntern.getEmail());
        intern.setMobile(updatedIntern.getMobile());
        intern.setIdCardType(updatedIntern.getIdCardType());
        intern.setDateOfJoining(updatedIntern.getDateOfJoining());

        return internRepository.save(intern);
    }

    // ✅ SEARCH BY NAME
    public List<Intern> searchByName(String name) {
        return internRepository.findByNameContaining(name);
    }

    // ✅ FILTER BY BATCH
    public List<Intern> filterByBatch(Long batchId) {
        return internRepository.findByBatchId(batchId);
    }

    // ✅ FILTER BY TYPE
    public List<Intern> filterByType(String type) {
        return internRepository.findByIdCardType(type);
    }
}