package sgsits.cse.dis.placement.placement_section.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sgsits.cse.dis.placement.placement_section.entity.InternshipQuestionEntity;
import sgsits.cse.dis.placement.placement_section.repo.InternshipQuestionRepo;

@Service
public class InternshipQuestionService{
    @Autowired
    private InternshipQuestionRepo repository;

    public List<InternshipQuestionEntity> findByTopicId(Long topicId) {
        return repository.findByTopicId(topicId);
    }
     public InternshipQuestionEntity saveQuestion(InternshipQuestionEntity question) {
        return repository.save(question);
    }
}
