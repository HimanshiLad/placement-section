package sgsits.cse.dis.placement.placement_section.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import sgsits.cse.dis.placement.placement_section.entity.PlacementQuestionEntity;
public interface PlacementQuestionRepo extends JpaRepository<PlacementQuestionEntity, Long> {

    List<PlacementQuestionEntity> findByTopicId(Long topicId);

}