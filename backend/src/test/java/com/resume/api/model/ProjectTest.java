package com.resume.api.model;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ProjectTest {

    @Test
    void constructorSetsAllFields() {
        String[] tags = {"Java", "Spring Boot"};
        Project project = new Project("My Project", "A description", "https://github.com/test", tags);

        assertEquals("My Project", project.getName());
        assertEquals("A description", project.getDescription());
        assertEquals("https://github.com/test", project.getUrl());
        assertArrayEquals(tags, project.getTags());
    }

    @Test
    void tagsCanBeEmpty() {
        Project project = new Project("No Tags", "A description", "https://github.com/test", new String[]{});

        assertEquals(0, project.getTags().length);
    }
}
