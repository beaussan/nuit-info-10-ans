package io.blabla.sam.repository;

import io.blabla.sam.domain.UserExtra;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import java.util.List;

/**
 * Spring Data JPA repository for the UserExtra entity.
 */
@SuppressWarnings("unused")
@Repository
public interface UserExtraRepository extends JpaRepository<UserExtra, Long> {
    @Query("select distinct user_extra from UserExtra user_extra left join fetch user_extra.trips")
    List<UserExtra> findAllWithEagerRelationships();

    @Query("select user_extra from UserExtra user_extra left join fetch user_extra.trips where user_extra.id =:id")
    UserExtra findOneWithEagerRelationships(@Param("id") Long id);

}
