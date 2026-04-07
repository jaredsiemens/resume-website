package com.resume.api.controller;

import com.resume.api.model.Project;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    @GetMapping
    public List<Project> getProjects() {
        return List.of(
            new Project(
                "Resume Website",
                "A full stack resume web application built to gain hands-on experience with end-to-end deployment and to learn Java. Features a React front end consuming a Spring Boot REST API, with resume and project data served dynamically and the whole stack containerized with Docker.",
                "https://github.com/jaredsiemens/resume-website",
                new String[]{"React", "Java", "Spring Boot"}
            ),
            new Project(
                "Project Two",
                "A short description of what this project does and why you built it.",
                "https://github.com/yourusername/project-two",
                new String[]{"React", "TypeScript"}
            )
        );
    }
}
