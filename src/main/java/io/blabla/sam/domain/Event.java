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
 * A Event.
 */
@Entity
@Table(name = "event")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Event implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "email")
    private String email;

    @Column(name = "city")
    private String city;

    @Column(name = "postal_code")
    private String postalCode;

    @Column(name = "street_number")
    private String streetNumber;

    @Column(name = "more_info_location")
    private String moreInfoLocation;

    @Column(name = "lattitude")
    private String lattitude;

    @Column(name = "longitude")
    private String longitude;

    @Column(name = "id_maps")
    private String idMaps;

    @OneToMany(mappedBy = "event")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Trip> trips = new HashSet<>();

    @ManyToOne
    private UserExtra owner;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public Event name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public Event email(String email) {
        this.email = email;
        return this;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCity() {
        return city;
    }

    public Event city(String city) {
        this.city = city;
        return this;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public Event postalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public String getStreetNumber() {
        return streetNumber;
    }

    public Event streetNumber(String streetNumber) {
        this.streetNumber = streetNumber;
        return this;
    }

    public void setStreetNumber(String streetNumber) {
        this.streetNumber = streetNumber;
    }

    public String getMoreInfoLocation() {
        return moreInfoLocation;
    }

    public Event moreInfoLocation(String moreInfoLocation) {
        this.moreInfoLocation = moreInfoLocation;
        return this;
    }

    public void setMoreInfoLocation(String moreInfoLocation) {
        this.moreInfoLocation = moreInfoLocation;
    }

    public String getLattitude() {
        return lattitude;
    }

    public Event lattitude(String lattitude) {
        this.lattitude = lattitude;
        return this;
    }

    public void setLattitude(String lattitude) {
        this.lattitude = lattitude;
    }

    public String getLongitude() {
        return longitude;
    }

    public Event longitude(String longitude) {
        this.longitude = longitude;
        return this;
    }

    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }

    public String getIdMaps() {
        return idMaps;
    }

    public Event idMaps(String idMaps) {
        this.idMaps = idMaps;
        return this;
    }

    public void setIdMaps(String idMaps) {
        this.idMaps = idMaps;
    }

    public Set<Trip> getTrips() {
        return trips;
    }

    public Event trips(Set<Trip> trips) {
        this.trips = trips;
        return this;
    }

    public Event addTrips(Trip trip) {
        this.trips.add(trip);
        trip.setEvent(this);
        return this;
    }

    public Event removeTrips(Trip trip) {
        this.trips.remove(trip);
        trip.setEvent(null);
        return this;
    }

    public void setTrips(Set<Trip> trips) {
        this.trips = trips;
    }

    public UserExtra getOwner() {
        return owner;
    }

    public Event owner(UserExtra userExtra) {
        this.owner = userExtra;
        return this;
    }

    public void setOwner(UserExtra userExtra) {
        this.owner = userExtra;
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
        Event event = (Event) o;
        if (event.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), event.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Event{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", email='" + getEmail() + "'" +
            ", city='" + getCity() + "'" +
            ", postalCode='" + getPostalCode() + "'" +
            ", streetNumber='" + getStreetNumber() + "'" +
            ", moreInfoLocation='" + getMoreInfoLocation() + "'" +
            ", lattitude='" + getLattitude() + "'" +
            ", longitude='" + getLongitude() + "'" +
            ", idMaps='" + getIdMaps() + "'" +
            "}";
    }
}
