package io.blabla.sam.service;

import io.blabla.sam.domain.UserExtra;
import io.blabla.sam.repository.UserExtraRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Service Implementation for managing UserExtra.
 */
@Service
@Transactional
public class UserExtraService {

    private final Logger log = LoggerFactory.getLogger(UserExtraService.class);

    private final UserExtraRepository userExtraRepository;

    public UserExtraService(UserExtraRepository userExtraRepository) {
        this.userExtraRepository = userExtraRepository;
    }

    /**
     * Save a userExtra.
     *
     * @param userExtra the entity to save
     * @return the persisted entity
     */
    public UserExtra save(UserExtra userExtra) {
        log.debug("Request to save UserExtra : {}", userExtra);
        return userExtraRepository.save(userExtra);
    }

    /**
     * Get all the userExtras.
     *
     * @return the list of entities
     */
    @Transactional(readOnly = true)
    public List<UserExtra> findAll() {
        log.debug("Request to get all UserExtras");
        return userExtraRepository.findAllWithEagerRelationships();
    }

    /**
     * Get one userExtra by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Transactional(readOnly = true)
    public UserExtra findOne(Long id) {
        log.debug("Request to get UserExtra : {}", id);
        return userExtraRepository.findOneWithEagerRelationships(id);
    }

    /**
     * Delete the userExtra by id.
     *
     * @param id the id of the entity
     */
    public void delete(Long id) {
        log.debug("Request to delete UserExtra : {}", id);
        userExtraRepository.delete(id);
    }
}
