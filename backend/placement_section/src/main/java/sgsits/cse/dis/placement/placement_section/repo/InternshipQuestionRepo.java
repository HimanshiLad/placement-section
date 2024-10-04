package sgsits.cse.dis.placement.placement_section.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import sgsits.cse.dis.placement.placement_section.entity.InternshipQuestionEntity;
public interface InternshipQuestionRepo extends JpaRepository<InternshipQuestionEntity, Long> {

    List<InternshipQuestionEntity> findByTopicId(Long topicId);

}