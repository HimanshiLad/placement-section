package sgsits.cse.dis.placement.placement_section.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import sgsits.cse.dis.placement.placement_section.entity.InternshipTopicEntity;
import sgsits.cse.dis.placement.placement_section.services.InternshipTopicService;

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class InternshipTopicController {
    @Autowired
    private InternshipTopicService service;

    // @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping ("/company/{company}")
    public List<InternshipTopicEntity> getTopicList(@PathVariable Long company) {
        return service.getTopicList(company);
    }
    
  


}