package com.internmanagement.service;

import com.internmanagement.entity.Batch;
import com.internmanagement.repository.BatchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class BatchService {

    @Autowired
    private BatchRepository batchRepository;

    public Batch createBatch(LocalDate startDate) {

        Batch batch = new Batch();
        batch.setStartDate(startDate);
        batch.setEndDate(startDate.plusMonths(6));

        return batchRepository.save(batch);
    }

    public List<Batch> getAllBatches() {
        return batchRepository.findAll();
    }
}