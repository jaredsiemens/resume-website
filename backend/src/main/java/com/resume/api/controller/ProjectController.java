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
                "Project One",
                "A short description of what this project does and why you built it.",
                "https://github.com/yourusername/project-one",
                new String[]{"Java", "Spring Boot"}
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
