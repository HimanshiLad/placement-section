package sgsits.cse.dis.placement.placement_section.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import sgsits.cse.dis.placement.placement_section.entity.PlacementTopicEntity;
public interface PlacementTopicRepo extends JpaRepository<PlacementTopicEntity, Long> {

    List<PlacementTopicEntity> findByCompanyId(Long companyId);

}