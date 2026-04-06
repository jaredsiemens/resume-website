package com.resume.api.model;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ProjectTest {

    @Test
    void constructorSetsAllFields() {
        String[] tags = { "Java", "Spring Boot" };
        Project project = new Project("My Project", "A description", "https://github.com/test", tags);

        assertEquals("My Project", project.name());
        assertEquals("A description", project.description());
        assertEquals("https://github.com/test", project.url());
        assertArrayEquals(tags, project.tags());
    }

    @Test
    void tagsCanBeEmpty() {
        Project project = new Project("No Tags", "A description", "https://github.com/test", new String[] {});

        assertEquals(0, project.tags().length);
    }
}
