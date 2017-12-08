package io.blabla.sam.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;


/**
 * A UserExtra.
 */
@Entity
@Table(name = "user_extra")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class UserExtra implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "is_orga")
    private Boolean isOrga;

    @Column(name = "has_done_web_tour")
    private Boolean hasDoneWebTour;

    @Column(name = "phone")
    private String phone;

    @OneToOne
    @JoinColumn(unique = true)
    private User user;

    @OneToMany(mappedBy = "owner")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Car> cars = new HashSet<>();

    @OneToMany(mappedBy = "owner")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Event> eventsOrganiseds = new HashSet<>();

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "user_extra_trips",
               joinColumns = @JoinColumn(name="user_extras_id", referencedColumnName="id"),
               inverseJoinColumns = @JoinColumn(name="trips_id", referencedColumnName="id"))
    private Set<Trip> trips = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Boolean isIsOrga() {
        return isOrga;
    }

    public UserExtra isOrga(Boolean isOrga) {
        this.isOrga = isOrga;
        return this;
    }

    public void setIsOrga(Boolean isOrga) {
        this.isOrga = isOrga;
    }

    public Boolean isHasDoneWebTour() {
        return hasDoneWebTour;
    }

    public UserExtra hasDoneWebTour(Boolean hasDoneWebTour) {
        this.hasDoneWebTour = hasDoneWebTour;
        return this;
    }

    public void setHasDoneWebTour(Boolean hasDoneWebTour) {
        this.hasDoneWebTour = hasDoneWebTour;
    }

    public String getPhone() {
        return phone;
    }

    public UserExtra phone(String phone) {
        this.phone = phone;
        return this;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public User getUser() {
        return user;
    }

    public UserExtra user(User user) {
        this.user = user;
        return this;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Set<Car> getCars() {
        return cars;
    }

    public UserExtra cars(Set<Car> cars) {
        this.cars = cars;
        return this;
    }

    public UserExtra addCars(Car car) {
        this.cars.add(car);
        car.setOwner(this);
        return this;
    }

    public UserExtra removeCars(Car car) {
        this.cars.remove(car);
        car.setOwner(null);
        return this;
    }

    public void setCars(Set<Car> cars) {
        this.cars = cars;
    }

    public Set<Event> getEventsOrganiseds() {
        return eventsOrganiseds;
    }

    public UserExtra eventsOrganiseds(Set<Event> events) {
        this.eventsOrganiseds = events;
        return this;
    }

    public UserExtra addEventsOrganised(Event event) {
        this.eventsOrganiseds.add(event);
        event.setOwner(this);
        return this;
    }

    public UserExtra removeEventsOrganised(Event event) {
        this.eventsOrganiseds.remove(event);
        event.setOwner(null);
        return this;
    }

    public void setEventsOrganiseds(Set<Event> events) {
        this.eventsOrganiseds = events;
    }

    public Set<Trip> getTrips() {
        return trips;
    }

    public UserExtra trips(Set<Trip> trips) {
        this.trips = trips;
        return this;
    }

    public UserExtra addTrips(Trip trip) {
        this.trips.add(trip);
        trip.getMembers().add(this);
        return this;
    }

    public UserExtra removeTrips(Trip trip) {
        this.trips.remove(trip);
        trip.getMembers().remove(this);
        return this;
    }

    public void setTrips(Set<Trip> trips) {
        this.trips = trips;
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
        UserExtra userExtra = (UserExtra) o;
        if (userExtra.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), userExtra.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "UserExtra{" +
            "id=" + getId() +
            ", isOrga='" + isIsOrga() + "'" +
            ", hasDoneWebTour='" + isHasDoneWebTour() + "'" +
            ", phone='" + getPhone() + "'" +
            "}";
    }
}
