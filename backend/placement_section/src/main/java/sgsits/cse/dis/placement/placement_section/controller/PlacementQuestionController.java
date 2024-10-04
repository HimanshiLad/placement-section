package sgsits.cse.dis.placement.placement_section.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import sgsits.cse.dis.placement.placement_section.entity.PlacementQuestionEntity;
import sgsits.cse.dis.placement.placement_section.services.PlacementQuestionService;

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class PlacementQuestionController {
    @Autowired
    private PlacementQuestionService service;

    @GetMapping("/PlacementQuestions/{topicId}")
    public List<PlacementQuestionEntity> findByTopicId(@PathVariable Long topicId) {
        return service.findByTopicId(topicId);
    }
    @PostMapping("/add-PlacementQuestion")
    public ResponseEntity<PlacementQuestionEntity> addQuestion(@RequestBody PlacementQuestionEntity question) {
        PlacementQuestionEntity newquestion = service.saveQuestion(question);
        return ResponseEntity.ok(newquestion);
    }

}
