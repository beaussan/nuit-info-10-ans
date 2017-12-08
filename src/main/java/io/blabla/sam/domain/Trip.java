package io.blabla.sam.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;


/**
 * A Trip.
 */
@Entity
@Table(name = "trip")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Trip implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "start_date")
    private ZonedDateTime startDate;

    @Column(name = "origin_city")
    private String originCity;

    @ManyToOne
    private Event event;

    @ManyToMany(mappedBy = "trips")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<UserExtra> members = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ZonedDateTime getStartDate() {
        return startDate;
    }

    public Trip startDate(ZonedDateTime startDate) {
        this.startDate = startDate;
        return this;
    }

    public void setStartDate(ZonedDateTime startDate) {
        this.startDate = startDate;
    }

    public String getOriginCity() {
        return originCity;
    }

    public Trip originCity(String originCity) {
        this.originCity = originCity;
        return this;
    }

    public void setOriginCity(String originCity) {
        this.originCity = originCity;
    }

    public Event getEvent() {
        return event;
    }

    public Trip event(Event event) {
        this.event = event;
        return this;
    }

    public void setEvent(Event event) {
        this.event = event;
    }

    public Set<UserExtra> getMembers() {
        return members;
    }

    public Trip members(Set<UserExtra> userExtras) {
        this.members = userExtras;
        return this;
    }

    public Trip addMembers(UserExtra userExtra) {
        this.members.add(userExtra);
        userExtra.getTrips().add(this);
        return this;
    }

    public Trip removeMembers(UserExtra userExtra) {
        this.members.remove(userExtra);
        userExtra.getTrips().remove(this);
        return this;
    }

    public void setMembers(Set<UserExtra> userExtras) {
        this.members = userExtras;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Trip trip = (Trip) o;
        if (trip.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), trip.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Trip{" +
            "id=" + getId() +
            ", startDate='" + getStartDate() + "'" +
            ", originCity='" + getOriginCity() + "'" +
            "}";
    }
}
