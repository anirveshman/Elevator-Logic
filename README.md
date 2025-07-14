# Elevator Simulation

A browser-based simulation of a simple elevator system with request handling, direction control, and floor-by-floor movement. Built using HTML, CSS, and JavaScript.

---

## Overview

This project simulates the operation of an elevator in a building with 10 floors (0 to 9). Users can:

- **Request** the elevator from any floor.
- **Enter a destination floor** once picked up.
- **Observe elevator behavior** as it handles multiple pickup and drop-off requests efficiently.

The goal of this project is to demonstrate fundamental logic and control flow in a real-time system using frontend web technologies.

---

## Features

- ✅ Dynamic floor request buttons.
- ✅ Elevator direction logic (up/down).
- ✅ Simulated travel and wait time delays.
- ✅ Floor highlighting during stops.
- ✅ Request queue management for both pickups and drop-offs.
- ✅ Real-time count of pending drop-off requests.

---

##  Technologies Used

- **HTML5** – Markup for structuring the simulation interface.
- **CSS3** – Styling the interface elements and layout.
- **Vanilla JavaScript** – Elevator logic, event handling, and dynamic UI updates.

---

## How It Works

1. **Click** any floor's request button to call the elevator.
2. When the elevator reaches your floor:
   - It will **prompt you** to enter your destination floor.
   - The request button will reset.
3. The elevator processes drop-off requests in sequence based on direction logic.
4. The simulation stops when all pending requests are served.

---

## UI

> 🔴 Floor the elevator is currently on  
> 🔵 Button pressed requesting the elevator  
> ⚪ Idle or served request button  

*Red dot on floor indicates current elevator position.*

---


