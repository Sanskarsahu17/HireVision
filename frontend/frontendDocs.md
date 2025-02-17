# Frontend Guide

This guide provides an overview of the frontend directory structure and key components.

## Folder Structure

├── public/ # Static assets
├── src/ # Source code
│ ├── assets/ # Images, fonts, etc.
│ ├── components/ # Reusable UI components
│ ├── hooks/ # Custom React hooks
│ ├── pages/ # Application pages
│ ├── services/ # API services
│ ├── theme/ # Theme configuration
│ ├── App.jsx # Root component
│ ├── index.css # Global styles
│ ├── index.js # Entry point
├── tailwind.config.js # Tailwind CSS configuration
└── package.json # Frontend dependencies and scripts
Save the file. 4. Commit and push the changes to your repository:
Now, the README.md file in your frontend directory should contain the updated frontend guide.

## Key Components

1. **`App.jsx`**: The root component that sets up the application layout and routing.
2. **`components/`**: Contains reusable UI components.
3. **`hooks/`**: Custom React hooks for sharing logic across components.
4. **`pages/`**: Application pages that correspond to different routes.
5. **`services/`**: API services for making HTTP requests.
6. **`theme/`**: Theme configuration for consistent styling.
7. **`tailwind.config.js`**: Configuration for Tailwind CSS.

# Frontend Documentation

## Authentication

### Components Location: `src/pages/auth/`

1. **AuthPage.jsx**

   - Main authentication page
   - Handles login/register toggle
   - Routes: `/auth`

2. **LoginForm.jsx**

   - Handles user login
   - Props:
     - `onSubmit`: Function
     - `loading`: Boolean
   - Features:
     - Email/Password validation
     - Remember me option
     - Forgot password link

3. **RegisterForm.jsx**
   - Handles user registration
   - Props:
     - `onSubmit`: Function
     - `loading`: Boolean
   - Features:
     - Form validation
     - Role selection (HR/Candidate)
     - Terms acceptance

## Candidate Pages

### Components Location: `src/pages/candidate/`

1. **CandidateDashboard.jsx**

   - Main dashboard for candidates
   - Route: `/candidate/dashboard`
   - Features:
     - Application status overview
     - Upcoming interviews
     - Profile completion

2. **CandidateApplications.jsx**

   - Shows all applications
   - Route: `/candidate/applications`
   - Features:
     - Application tracking
     - Status updates
     - Interview schedules

3. **ScheduledInterview.jsx**
   - Manages interview schedules
   - Props:
     - `interviews`: Array
     - `onJoinInterview`: Function
   - Features:
     - Interview countdown
     - Join interview button
     - Preparation tips

## common components

### Location: `src/components/common/`

1. **Navbar.jsx**

   - Global navigation
   - Features:

     - Role-based menu items
     - Authentication status
     - Responsive design

     <!-- ----------------- -------------- hr page component  ------------------------------------------------ -->

     # HR Page Components Documentation

## Core Components

### `SideBar.jsx`

**Location**: `src/components/hrPage/SideBar.jsx`
**Purpose**: Main navigation sidebar for HR portal
**Features**:

- Navigation links for all HR functions
- Active state highlighting
- Badge notifications for messages
- Responsive design
  **Props**: None
  **Navigation Items**:
- Dashboard
- Candidates
- Job Postings
- Messages
- Interviews
- Reports
- Settings

## Dashboard Components

### `AnalyticsOverview.jsx`

**Location**: `src/components/hrPage/dashboard/AnalyticsOverview.jsx`
**Purpose**: Displays key recruitment metrics
**Features**:

- Grid layout of metric cards
- Responsive design
  **Props**: None
  **Dependencies**: MetricCard component

### `MetricCard.jsx`

**Location**: `src/components/hrPage/dashboard/metrics/MetricCard.jsx`
**Purpose**: Individual metric display card
**Props**:

- `icon`: React component
- `label`: String
- `value`: String/Number
- `trend`: Number
- `color`: String
  **Features**:
- Animated entrance
- Color-coded trends
- Dynamic icon display

### `RecentActivity.jsx`

**Location**: `src/components/hrPage/dashboard/RecentActivity.jsx`
**Purpose**: Shows recent recruitment activities
**Features**:

- Activity timeline
- Icon-based activity types
- Time-based sorting
  **Activity Types**:
- Applications
- Shortlisting
- Interviews
- Messages

### `TeamTasks.jsx`

**Location**: `src/components/hrPage/dashboard/TeamTasks.jsx`
**Purpose**: Task management for HR team
**Features**:

- Task status indicators
- Priority levels
- Assignee tracking
  **Task Statuses**:
- Pending
- Completed
- Urgent

### `UpcomingInterviews.jsx`

**Location**: `src/components/hrPage/dashboard/UpcomingInterviews.jsx`
**Purpose**: Interview schedule overview
**Features**:

- Interview details display
- Quick join meeting button
- Interviewer avatars
  **Props**: None

## Job Posting Components in sidebar

### `JobPosting.jsx`

**Location**: `src/components/hrPage/sidebar/jobPosting/JobPosting.jsx`
**Purpose**: Main job posting management
**Features**:

- CRUD operations for jobs
- Modal form for job creation/editing
- Job listing display
  **API Integration**:
- Create: POST `/api/hr-dashboard/job-posting`
- Update: PUT `/api/hr-dashboard/updateJob/:id`
- Delete: DELETE `/api/hr-dashboard/deleteJob/:id`

### `JobCard.jsx`

**Location**: `src/components/hrPage/sidebar/jobPosting/JobCard.jsx`
**Purpose**: Individual job posting display
**Props**:

- `job`: Object
- `onEdit`: Function
- `onDelete`: Function
  **Features**:
- Job details display
- Edit/Delete actions
- Status indicators

### `JobForm.jsx`

**Location**: `src/components/hrPage/sidebar/jobPosting/JobForm.jsx`
**Purpose**: Form for job creation/editing
**Features**:

- Comprehensive job details input
- Form validation
- Multi-line input for requirements/responsibilities
  **Form Fields**:
- Job Title
- Department
- Location
- Job Type
- Salary Range
- Description
- Requirements
- Responsibilities
- Benefits

### `JobModal.jsx`

**Location**: `src/components/hrPage/sidebar/jobPosting/JobModal.jsx`
**Purpose**: Modal container for job form
**Props**:

- `onClose`: Function
- `onSave`: Function
- `job`: Object (optional)
  **Features**:
- Responsive modal
- Close button
- Form container

## Candidate Management Components

### `CandidateList.jsx`

**Location**: `src/components/hrPage/candidatesAppliedComponents/CandidateList.jsx`
**Purpose**: Displays list of job applicants
**Features**:

- Animated candidate cards
- Status indicators
- Resume download link
  **Status Types**:
- Pending
- Accepted
- Rejected
- Under Review

### `CandidateFilter.jsx`

**Location**: `src/components/hrPage/sidebar/candidates/CandidateFilter.jsx`
**Purpose**: Filter and search candidates
**Features**:

- Search functionality
- Filter options
- Clean UI design

## Additional sidebar Features

### `Messages.jsx`

**Location**: `src/components/hrPage/sidebar/Messages.jsx`
**Purpose**: Message management system
**Features**:

- Message inbox
- Search functionality
- Unread indicators

### `Reports.jsx`

**Location**: `src/components/hrPage/sidebar/Reports.jsx`
**Purpose**: Recruitment analytics and reports
**Features**:

- Recruitment metrics
- Pipeline overview
- Time-based filtering

### `Settings.jsx`

**Location**: `src/components/hrPage/sidebar/Settings.jsx`
**Purpose**: HR portal settings
**Features**:

- Profile settings
- Notification preferences
- Security options
