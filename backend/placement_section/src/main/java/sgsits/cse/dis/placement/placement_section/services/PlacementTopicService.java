package sgsits.cse.dis.placement.placement_section.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sgsits.cse.dis.placement.placement_section.entity.PlacementTopicEntity;
import sgsits.cse.dis.placement.placement_section.repo.PlacementTopicRepo;

@Service
public class PlacementTopicService {
    @Autowired
    private PlacementTopicRepo repository;

    public List<PlacementTopicEntity> findByCompanyId(Long companyId) {
        return repository.findByCompanyId(companyId);
    }
     public PlacementTopicEntity saveTopic(PlacementTopicEntity topic) {
        return repository.save(topic);
    }
}

