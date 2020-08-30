# Team 016: BirthApp Project – BuildForSDGCohort2

## Project name

BirthApp

## Short description

An international Birth Registration Application

## Long description

A progressive web application developed to notify and to register any birth anywhere and everywhere regardless the health environment. The application delivers a printable birth certificate and generates various reports.

## Project motivation

According to the Multiple Indicator Cluster Surveys, MICS report for 2014, birth registration in Cameroon was only 66.1 per cent. Being aware that this situation is not the worst in Africa and abroad, knowing that some progresses have been done since then, but not really good enough to make remarkable progress, many factors such as infrastructure, lack of adequate national policies, distant countryside&#39;s areas etc. still a big barrier to record all births. Therefore, we are convinced that the development and the implementation of this BirthApp will be a huge boost to many stakeholders&#39; efforts to solve the problem of unrecorded people.

## Project category

SDG Goals

## Problem to solve

Many people do not have birth certificates because the service is not readily available to their convenience unlikely they have never been registered.

## Problem analysis

It&#39;s a demographic problem that can impact on the global economy, migration, security, and planning.

It also affects other sectors like education, health, ...

But why people aren&#39;t registered?

```sh
1. Convenience (Distance)
2. Not represented... they are orphans
3. Ignorance
4. Lack of adequate policies at national level
5. Lack of infrastructures
6. Matrimonial status and family conflicts
7. Births made outside the hospital
8. Hospitals don't care about the birth registration
```

## Problem solution

The BirthApp attempts to solve the problem by enabling public to access and register any birth in the comfort of their homes.

The BirthApp also attempts to incorporate various stakeholders to try and simulate the real office registry environment.

The BirthApp is fulltime accessed through the web and by phone anywhere and everywhere.

The BirthApp detects and identifies birth notifications made outside of the hospital, then forward them to the specific **local authority** or the **dedicated project agent** for verification.

The BirthApp brings a harmonization of birth records.

## Key features
```sh
1. Authentication
2. Birth notification
3. Birth registration
4. Birth certification
5. Certification tracking
6. Comment and approbation
7. Localization (Multilanguage, time zone, …)
```

## Functionality requirements

### 1. User registration

```sh
  - User_id
  - Username
  - Email
  - Password
  - Group (guest, notifier, agent, admin)
  - Status (active/disabled)
```

### 2. User login

```sh
  - Username/Email
  - Password
```

### 3. Birth notification

```sh
  - Notification_id
  - User_id
  - New_Born_firstname
  - New_Born_lastname
  - New_Born_gender
  - Father_names
  - Mother_names
  - Country
  - Subcountry/Province
  - District
  - City/Town/Village
  - InHospital (Yes/No)
    * Hospital_name
    * Hospital_contact
    * Hospital_address
    * Hospital_doctor_birth_in_charge
  - Weight
  - Anomalies (if applicable)
  - Other_comments
  - Notification_status (in_progress, approved, rejected)
```

### 4. Birth tracking

```sh
  - Track_id
  - Notification_id
  - User_id
  - Comment
  - Track_status
```

### 5. Birth Certification

```sh
  - Certicate_id
  - Notification_id
  - User_id
  - Certificate_details (from notification)
```

### 6. Reporting

```sh
  - Report_id
  - Report_details (settings)
    * global
    * country
    * province
    * district
    * village
    * user
    * agent
    * hospital
    * periodic
    * monthly
    * weekly
    * daily
    * gender
    * status
    * anomalies…
```

## User group role

### 1. Notifier

```sh
  - Login
  - Birth notification
  - Notification tracking (check progress and add comments)
  - Access own certificate
  - Download own certificate
  - Log out
```

### 2. Local Official

```sh
  - Login
  - Birth notification
  - Notification tracking
  - Birth confirmation
  - Access all certificates specific to his/her domain (locality)
  - Log out
```

### 3. Agent

```sh
  - Log in
  - Birth notification
  - Notification tracking
  - Birth approval
  - Access all certificates in charge of him/her
  - Access all reports
  - Certificates management
  - Notifier management
  - Tracking management
  - Log out
```

### 4. Admin

```sh
  - Log in
  - Agents management
  - Full access
  - Log out
```

## Development tools

```sh
1. MongoDb
2. Express
3. ReactJS
4. NodeJS
5. Github
6. Codacy
```

## Project scope

Birth registration

Certificate issuance

## Project cost

N/A

## Author

BuildForSDGCohort2 Team-016-group-a

## Contributors

```sh
1. Talent Jokonya (backend)
2. Selma Ndi (frontend)
3. Tinos Anogo (frontend)
4. Robert Makuta (backend)
```

## Tasks

| Task | Responsible | Deadline |
| ------ | ------ | ------ |
| 1. Discussion summary | Robert Makuta | 30.08.2020 |
| 2. UML design | Talent Jokonya | 05.09.2020 |
| 3. Frontend screens design | Selma Ndi &amp; Tinos Anogo | 05.09.2020 |
| 4. Backend screens design | Talent Jokonya &amp; Robert Makuta | 05.09.2020 |
| 5. Github project management setup | Robert Makuta | 01.09.2020 |
| 6. Heroku setup | Robert Makuta | 03.09.2020 |
| 7. Frontend coding | Selma Ndi &amp; Tinos Anogo | 25.09.2020 |
| 8. Backend coding | Talent Jokonya &amp; Robert Makuta | 25.09.2020 |

## Expectations

```sh
1. All new born children in hospitals are registered
2. All new born children outside of the hospital are registered
3. International birth certificate is issued
4. Birth reports and statistics available in real time
5. Additional health information available to other services
```

## Timeline

Four weeks to go (to finish before 25th September 2020)

## Long-term extensions / The Future (out of current scope)

```sh
1. Project agencies
2. Hospitals registration
3. Local government officials registration
```
