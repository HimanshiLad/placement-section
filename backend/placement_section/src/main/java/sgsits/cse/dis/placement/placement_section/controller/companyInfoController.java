package sgsits.cse.dis.placement.placement_section.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import sgsits.cse.dis.placement.placement_section.entity.companyInfoEntity;
import sgsits.cse.dis.placement.placement_section.services.companyInfoService;

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class companyInfoController {
    @Autowired
    private companyInfoService service;

    // @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping ("/companies")
    public List<companyInfoEntity> getCompanyList() {
        return service.getCompanyList();
    }
    
  


}






