package com.resume.api.controller;

import com.resume.api.model.Resume;
import com.resume.api.model.Resume.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/resume")
public class ResumeController {

    @GetMapping
    public Resume getResume() {
        var experience = List.of(
                new Experience(
                        "Software Development Engineer",
                        "Kongsberg",
                        "September 2025 – Present",
                        List.of(
                                "Created adaptors to integrate chemical sensors and radios in embedded applications using C++ 17.",
                                "Conducted formal verification of hundreds of backend requirements for Factory Acceptance Testing (FAT) of self-propelled howitzer systems.",
                                "Maintained 95%+ test coverage across embedded application suite using Boost Test; debugged with gdb.",
                                "Developed embedded applications using DDS (Data Distribution Service) for real-time, event-driven data distribution across distributed systems.")),
                new Experience(
                        "Associate Software Engineer",
                        "Lockheed Martin",
                        "January 2024 – September 2025",
                        List.of(
                                "Operated as Scrum Master for a team of 9 engineers, establishing processes that improved traceability between sprint goals and post-sprint delivery outcomes.",
                                "Led the development of Angular micro frontends with embedded data analytics reports.",
                                "Designed, architected and led implementation of production features such as a File Management System for handling file uploads using TypeScript and NestJS.",
                                "Developed and deployed text-to-speech and speech-to-text models using Python and FastAPI, used in production by hundreds of pilots.",
                                "Researched, trained and deployed ML time series forecasting models that automated production scheduling, reducing manual effort by several hours per week and improving forecast accuracy from 30% to 80%.",
                                "Contributed to CI/CD pipelines and GitLab workflows in a Linux development environment.")),
                new Experience(
                        "Data Analyst",
                        "Fusion5",
                        "July 2023 – January 2024",
                        List.of(
                                "Researched and developed proof of concept AI/ML models for business applications including churn prediction, evaluating feasibility for client deployment.",
                                "Led development and integration of ~30 business intelligence reports used across 50+ clients.",
                                "Drafted technical documents detailing research related to business needs in the industry.",
                                "Utilized SQL Server to investigate and maintain data required for reporting needs.")),
                new Experience(
                        "Academic Researcher",
                        "University of South Australia",
                        "May 2023 – September 2023",
                        List.of(
                                "Developed a React web application for university course creation, integrating with the ChatGPT API via AWS Lambda.",
                                "Developed an LLM-powered course creation tool projected by the Pro Vice Chancellor to deliver 10% cost savings (~$3M over 5 years) through university-wide automation.",
                                "Researched LLM capacity to grade assignments and establish connections to course outcomes.")));

        var education = new Education(
                "Bachelor of Computer Science, Artificial Intelligence",
                "University of Adelaide",
                "Completed July 2023");

        var skills = Map.of(
                "Languages", List.of("Python", "C++", "SQL", "TypeScript"),
                "Frameworks/Libraries", List.of("Angular", "React", "NestJS", "FastAPI", "QML"),
                "Tools", List.of("Git", "GitLab", "Docker", "Kubernetes", "Boost Test", "gdb", "SQL Server"),
                "Environments", List.of("Linux"),
                "Cloud/DevOps", List.of("AWS Lambda"));

        var awards = List.of(
                new Award(
                        "Committee Choice Award – Adelaide MedTech Hackathon",
                        "Led a team to design and present a hospital waste reduction solution, selected by the judging committee from all competing entries."),
                new Award(
                        "Winner – Accenture Tech Bootcamp",
                        "Built a cloud migration impact estimation solution using AWS Lambda, winning the overall competition."));

        var activities = List.of(
                new Activity(
                        "Ice Hockey",
                        List.of(
                                "Led the Adelaide Avalanche to the first male South Australia state team championship in 5 years, selected as assistant captain.",
                                "Trained young players, fostering a passion for the sport and teaching commitment to working within a team.",
                                "Volunteered as Assistant Coach for a junior team, developing a collaborative and productive team environment.")));

        return new Resume(experience, education, skills, awards, activities);
    }
}
