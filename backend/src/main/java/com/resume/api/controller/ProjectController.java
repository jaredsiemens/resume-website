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
                "A full stack resume web application with a React front end and Java Spring Boot REST API backend. Features dynamic project and resume data served from a REST API, deployed with Docker.",
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
