package sgsits.cse.dis.placement.placement_section.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sgsits.cse.dis.placement.placement_section.entity.companyInfoEntity;
import sgsits.cse.dis.placement.placement_section.repo.companyInfoRepo;

@Service
public class companyInfoService {
    @Autowired
    private companyInfoRepo repository;

    public List<companyInfoEntity> getCompanyList() {
        return repository.findAll();
    }
}
