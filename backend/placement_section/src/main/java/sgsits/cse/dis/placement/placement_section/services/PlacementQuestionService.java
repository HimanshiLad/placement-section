package sgsits.cse.dis.placement.placement_section.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sgsits.cse.dis.placement.placement_section.entity.PlacementQuestionEntity;
import sgsits.cse.dis.placement.placement_section.repo.PlacementQuestionRepo;

@Service
public class PlacementQuestionService{
    @Autowired
    private PlacementQuestionRepo repository;

    public List<PlacementQuestionEntity> findByTopicId(Long topicId) {
        return repository.findByTopicId(topicId);
    }
     public PlacementQuestionEntity saveQuestion(PlacementQuestionEntity question) {
        return repository.save(question);
    }
}
