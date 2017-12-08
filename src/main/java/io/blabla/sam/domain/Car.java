package io.blabla.sam.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.Objects;


/**
 * A Car.
 */
@Entity
@Table(name = "car")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Car implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @NotNull
    @Column(name = "nmb_place", nullable = false)
    private Integer nmbPlace;

    @NotNull
    @Column(name = "name", nullable = false)
    private String name;

    @ManyToOne
    private UserExtra owner;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getNmbPlace() {
        return nmbPlace;
    }

    public Car nmbPlace(Integer nmbPlace) {
        this.nmbPlace = nmbPlace;
        return this;
    }

    public void setNmbPlace(Integer nmbPlace) {
        this.nmbPlace = nmbPlace;
    }

    public String getName() {
        return name;
    }

    public Car name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public UserExtra getOwner() {
        return owner;
    }

    public Car owner(UserExtra userExtra) {
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
        Car car = (Car) o;
        if (car.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), car.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Car{" +
            "id=" + getId() +
            ", nmbPlace=" + getNmbPlace() +
            ", name='" + getName() + "'" +
            "}";
    }
}
