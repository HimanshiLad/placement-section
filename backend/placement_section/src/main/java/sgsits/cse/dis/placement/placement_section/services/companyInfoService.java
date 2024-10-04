package sgsits.cse.dis.placement.placement_section.services;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sgsits.cse.dis.placement.placement_section.entity.companyInfoEntity;
import sgsits.cse.dis.placement.placement_section.repo.companyInfoRepo;

@Service
public class companyInfoService {
    @Autowired
    private companyInfoRepo repository;

    public List<companyInfoEntity> getcompanyByCategory(String category) {
        return repository.findByCategory(category);
    }

    public List<List<companyInfoEntity>> getcompaniesByCategory(List<String> categories) {
        List<List<companyInfoEntity>> result = new ArrayList<>();
        for (String category : categories) {
            result.add(repository.findByCategory(category)); // Each category's result in a separate list
        }
        return result;
    }
    public companyInfoEntity saveCompany(companyInfoEntity company) {
        return repository.save(company);
    }
}
