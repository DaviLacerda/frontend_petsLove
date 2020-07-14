import { observable } from 'mobx'
import InputStore from 'stores/InputStore'

const USER_TRANSIT = 'Transit pets.'
const USER_PROTECTIONIST = 'You are protectionist of pets.'
const USER_ADOPTER = 'You want adopt.'

class User {
  @observable state = true
  @observable terms = false
  @observable canTransit = false

  constructor(id) {
    this._id = id
    this.location = new InputStore()
    this.image = new InputStore()
    this.name = new InputStore()
    this.firstname = new InputStore()
    this.lastname = new InputStore()
    this.role = new InputStore()
    this.email = new InputStore()
    this.phone = new InputStore()
    this.aboutUs = new InputStore()
    this.imageId = new InputStore()
    this.requirementsToAdopt = new InputStore()
    this.lat = new InputStore()
    this.lng = new InputStore()
    this.textAddress = new InputStore()
    this.username = new InputStore()
    this.password = new InputStore()
  }

  fillJson(user) {
    this._id = user._id
    this.image.setValue(user.image)
    this.name.setValue(user.name)
    this.firstname.setValue(user.firstname)
    this.lastname.setValue(user.lastname)
    this.role.setValue(user.role)
    this.email.setValue(user.email)
    this.phone.setValue(user.phone)
    this.aboutUs.setValue(user.aboutUs)
    this.location.setValue(user.location)
    this.textAddress.setValue(user.textAddress)
    this.requirementsToAdopt.setValue(user.requirementsToAdopt)
    this.username.setValue(user.username)
    this.setImageId(user.image._id)
    this.terms = user.terms
    this.canTransit = user.canTransit
  }

  getJson() {
    const userEntity = {
      _id: this._id,
      image: this.getImageId(),
      name: this.name.value,
      firstname: this.firstname.value,
      lastname: this.lastname.value,
      role: this.role.value,
      email: this.email.value,
      phone: this.phone.value,
      aboutUs: this.aboutUs.value,
      location: this.location.value,
      username: this.username.value,
      textAddress: this.textAddress.value,
      requirementsToAdopt: this.requirementsToAdopt.value,
      canTransit: this.canTransit,
      state: this.state,
      terms: this.terms,
    }

    if (this.password.value !== '') {
      userEntity.password = this.password.value
    }

    return userEntity
  }

  // ============================================
  // Setters
  // ============================================

  setAddress(address) {
    this.location.setValue(address)
  }

  setImage(idImage) {
    this.image.setValue(idImage)
  }

  setImageId(idImage) {
    this.imageId.setValue(idImage)
  }

  // ============================================
  // Getters
  // ============================================

  getImageId() {
    return this.imageId.value
  }

  getUserId() {
    return this.user._id
  }

  getRole() {
    if (this.role.value === 'transitUser') {
      return USER_TRANSIT
    }
    if (this.role.value === 'protectionist') {
      return USER_PROTECTIONIST
    }
    if (this.role.value === 'adopter') {
      return USER_ADOPTER
    }
    return ''
  }
}

export default User
