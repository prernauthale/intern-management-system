package com.internmanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import com.internmanagement.entity.Intern;

public interface InternRepository extends JpaRepository<Intern, Long> {

    List<Intern> findByNameContaining(String name);

    List<Intern> findByBatchId(Long batchId);

    List<Intern> findByIdCardType(String type);

    int countByDateOfJoining(java.time.LocalDate dateOfJoining);
}