package sgsits.cse.dis.placement.placement_section.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sgsits.cse.dis.placement.placement_section.entity.InternshipTopicEntity;
import sgsits.cse.dis.placement.placement_section.repo.InternshipTopicRepo;

@Service
public class InternshipTopicService {
    @Autowired
    private InternshipTopicRepo repository;

    public List<InternshipTopicEntity> getTopicList(Long company) {
        return repository.findById(company);
    }
}
