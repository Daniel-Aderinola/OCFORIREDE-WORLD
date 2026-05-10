export interface CVSubmission {
    fullName: string
    email: string
    phone: string
    specialty: string
    yearsExperience: string
    qualification: string
    currentLocation: string
    preferredLocation?: string
    availableFrom?: string
    notes?: string
    fileName?: string
}

export interface Booking {
    fullName: string
    email: string
    phone: string
    packageName: string
    date: string
    timeSlot: string
    format: string
    notes?: string
}
