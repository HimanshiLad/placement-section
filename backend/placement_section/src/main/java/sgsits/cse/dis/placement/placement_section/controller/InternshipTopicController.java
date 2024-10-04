package sgsits.cse.dis.placement.placement_section.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import sgsits.cse.dis.placement.placement_section.entity.InternshipTopicEntity;
import sgsits.cse.dis.placement.placement_section.services.InternshipTopicService;

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class InternshipTopicController {
    @Autowired
    private InternshipTopicService service;

    @GetMapping("/topics/{companyId}")
    public List<InternshipTopicEntity> findByCompanyId(@PathVariable Long companyId) {
        return service.findByCompanyId(companyId);
    }
    @PostMapping("/add-topic")
    public ResponseEntity<InternshipTopicEntity> addTopic(@RequestBody InternshipTopicEntity topic) {
        System.out.println("Name: " + topic.getName());
        System.out.println("Category: " + topic.getCategory());
        System.out.println("Company ID: " + topic.getCompanyId());
        InternshipTopicEntity newTopic = service.saveTopic(topic);
        return ResponseEntity.ok(newTopic);
    }

}