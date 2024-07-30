# SkyOps: Airline Database Management System

![SkyOps Logo](https://github.com/shriyansh1234/SkyOps123/blob/main/client/src/Assets/Logo.svg)

## Introduction

The **Airline Database Management System: SkyOps** represents a comprehensive solution to the complex challenges of managing airline operations. This project addresses a persistent issue in the industry — the inconvenience caused by abrupt flight cancellations due to harsh weather conditions. SkyOps aims to streamline the flight booking process and introduces a proactive approach to passenger well-being.

## Motivation

The core problem we aim to address is the disruptive impact of unpredictable weather on air travel. Passengers often face last-minute flight cancellations, leading to wasted time, inconvenience, and frustration. SkyOps employs a sophisticated weather alert system that proactively alerts customers of potentially harsh weather conditions, allowing them to reschedule or cancel their flights in advance.

## Key Functionalities

- **User-Friendly Website**: Passengers can seamlessly book, update, or cancel their flights.
![Add a Passenger](https://github.com/shriyansh1234/SkyOps123/blob/main/client/src/Assets/openweatherapi.gif)
- **Weather API Integration**: Fetches real-time weather data to inform passengers about weather conditions at both the source and destination airports.
![OpenWeather API](https://github.com/shriyansh1234/SkyOps123/blob/main/client/src/Assets/openweatherapi.gif)
- **Proactive Alerts**: Enhances the travel experience by providing up-to-the-minute information and allowing passengers to make informed decisions.

## Database Details

The database is designed to ensure efficiency by focusing on key functional dependencies and eliminating unnecessary columns. It comprises four core tables:

- **Airplanes**:
  - Attributes: Arrival Time, Duration, Departure Time, Source, Destination, Airline, Tail Number, FK: AirportId

- **Passengers**:
  - Attributes: FirstName, LastName, PassengerId, PhoneNumber, Miles_on_Passenger, FK: Tail Number

- **Tickets**:
  - Attributes: Cost, Cancellation Fee, TicketID, Seat Number, Departure_Date, Class, BookingDate, FK: PassengerId

- **Airport**:
  - Attributes: AirportId, AirportName, City, City_Code, State_or_Country
    
## Relational Schema

```sql
airplanes (Arrival Time, Duration, Departure Time, Source, Destination, Airline, Tail Number, FK: AirportId)
passengers (FirstName, Lastname, PassengerId, PhoneNumber, Miles_on_Passenger, FK: Tail Number)
tickets (Cost, Cancellation Fee, TicketID, Seat Number, Departure_Date, Class, BookingDate, FK: PassengerId)
airport (AirportId, AirportName, City, City_Code, State_or_Country)
