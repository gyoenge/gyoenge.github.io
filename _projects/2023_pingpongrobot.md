---
layout: page
title: "Ping-pong Robot Competetion"
description: We utilized OpenCV for its stereo vision system, a trajectory approximation algorithm for prediction, and a multiprocessing architecture to enable a fast response
img: assets/img/projects/2023_pingpongrobot_mainimg.png
# importance: 2
# category: 2023
importance: 5
category: "Medical & Vision AI Project" 
related_publications: false
---

**Simple Table Tennis Robot Development**

- Event: Creativity & Convergence Competition (Table Tennis Robot Track) (June-August 2023)
- Theme: Develop a simple table tennis robot
- Team Idea: Our robot detects a ping-pong ball within the first two frames of video input from a stereo camera setup. Using this initial 3D position data, it applies a **trajectory approximation** algorithm to predict the ball's final destination. The entire workflow—from vision processing to robot control—is managed through a **parallel processing** system to ensure a swift response to fast-moving balls.
- Team Size: 4 members
- My Role: Implemented the **OpenCV vision system of table tennis robot**.

- **See the below Mockup!**.

### Mockup

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0 text-center">
        <video class="img-fluid rounded z-depth-1" controls>
            <source src="{{ 'assets/img/projects/2023_pingpongrobot_inner1.MP4' | relative_url }}" type="video/mp4">
        </video>
    </div>
</div>
<div class="caption text-center">
    The Mockup of our ping-pong robot.
</div>

### Poster

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/2023_pingpongrobot_inner2.jpg" title="preview" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The poster of the contest result description.  
</div>

### Description: System Overview

The robot's architecture is divided into four main subsystems:

**1. Vision System**

- Hardware: A stereo camera system is installed to capture the first half of the table, providing the depth perception necessary for 3D coordinate extraction.
- Software: The system detects the ping-pong ball by applying an HSV color mask to isolate orange objects within a specific Region of Interest (ROI). After an affine transformation on the ROI, the ball's center of mass in both camera frames (frameL and frameR) is calculated. Using stereo vision principles (triangulation from disparity), these 2D coordinates are converted into real-world 3D coordinates (x, y, z).

**2. Prediction System**

- This system uses the 3D coordinates from the first two frames to approximate the ball's entire flight path.
- XY-Plane Prediction: The trajectory on the xy-plane is approximated as a straight line to predict the final x-coordinate (x_final). An experimental weight and bias were added to account for trajectory changes after the ball bounces.
- YZ-Plane Prediction: The trajectory on the yz-plane is approximated as a parabola to predict the final z-coordinate (z_final), using the least squares method for curve fitting.

**3. Robot System**

- Hardware: The robot consists of a multi-joint arm mounted on a linear actuator, allowing it to move horizontally along the table. The design was refined from an initial concept to a more structurally sound version for the final build.
- Software: The robot's hitting motion is a composite movement designed to push the ball forward, inspired by analyzing professional table tennis players-. Motor control was implemented using the DYNAMIXEL SDK for precise adjustments of position and velocity. Communication between the main Python control script and the C++-controlled linear actuator is handled via UDP socket communication.

**4. Integration System**

- This system manages the entire workflow, from camera input to robot control, using a parallel architecture to overcome the limitations of sequential processing.
- Multithreading: Initially used to solve the issue of handling two simultaneous camera inputs.
- Multiprocessing: To achieve true parallel processing and bypass Python's Global Interpreter Lock (GIL), the system was ultimately designed with 6 distinct processes. Data is passed sequentially between processes using queues, significantly improving the overall processing speed and enabling a real-time response.

### Trials and Errors

Our final design was the result of extensive experimentation. We explored several alternative methods that were ultimately discarded but provided valuable insights:

- Deep Learning: We attempted three deep learning approaches: a reinforcement learning agent trained in a virtual environment (Sim2Real), a trajectory classification model , and a neural network to solve the robot's inverse kinematics. These were abandoned due to issues with simulation-to-reality gaps, slow inference speeds, and dataset limitations.
- Single-Frame Prediction: We experimented with using motion blur in a single frame to predict trajectory but found the results were too inconsistent and error-prone.
- Hough Transform: An initial plan to use Hough Circle Transform for ball detection proved too slow for real-time application and struggled with the motion blur of a fast-moving ball.
