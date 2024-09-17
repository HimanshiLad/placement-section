package sgsits.cse.dis.placement.placement_section.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import sgsits.cse.dis.placement.placement_section.entity.companyInfoEntity;
public interface companyInfoRepo extends JpaRepository<companyInfoEntity, Long> {
}