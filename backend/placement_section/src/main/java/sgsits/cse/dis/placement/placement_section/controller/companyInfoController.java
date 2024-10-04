package sgsits.cse.dis.placement.placement_section.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import sgsits.cse.dis.placement.placement_section.entity.companyInfoEntity;
import sgsits.cse.dis.placement.placement_section.services.companyInfoService;

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class companyInfoController {
    @Autowired
    private companyInfoService service;

    @GetMapping ("/company")
    public List<companyInfoEntity> getCompanyByCategory(@RequestParam String category) {
        return service.getcompanyByCategory(category);
    }
    @GetMapping ("/companies")
    public List<List<companyInfoEntity>> getCompaniesbyCategory(@RequestParam List<String> categories) {
        return service.getcompaniesByCategory(categories);
    }

    @PostMapping("/add-company")
    public ResponseEntity<companyInfoEntity> addCompany(@RequestBody companyInfoEntity company) {
        companyInfoEntity newCompany = service.saveCompany(company);
        return ResponseEntity.ok(newCompany);
    }
  


}






