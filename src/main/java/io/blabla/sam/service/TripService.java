package io.blabla.sam.service;

import io.blabla.sam.domain.Trip;
import io.blabla.sam.repository.TripRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Service Implementation for managing Trip.
 */
@Service
@Transactional
public class TripService {

    private final Logger log = LoggerFactory.getLogger(TripService.class);

    private final TripRepository tripRepository;

    public TripService(TripRepository tripRepository) {
        this.tripRepository = tripRepository;
    }

    /**
     * Save a trip.
     *
     * @param trip the entity to save
     * @return the persisted entity
     */
    public Trip save(Trip trip) {
        log.debug("Request to save Trip : {}", trip);
        return tripRepository.save(trip);
    }

    /**
     * Get all the trips.
     *
     * @return the list of entities
     */
    @Transactional(readOnly = true)
    public List<Trip> findAll() {
        log.debug("Request to get all Trips");
        return tripRepository.findAll();
    }

    /**
     * Get one trip by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Transactional(readOnly = true)
    public Trip findOne(Long id) {
        log.debug("Request to get Trip : {}", id);
        return tripRepository.findOne(id);
    }

    /**
     * Delete the trip by id.
     *
     * @param id the id of the entity
     */
    public void delete(Long id) {
        log.debug("Request to delete Trip : {}", id);
        tripRepository.delete(id);
    }
}
