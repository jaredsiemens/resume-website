package com.resume.api.model;

public class Project {
    private String name;
    private String description;
    private String url;
    private String[] tags;

    public Project(String name, String description, String url, String[] tags) {
        this.name = name;
        this.description = description;
        this.url = url;
        this.tags = tags;
    }

    public String getName() { return name; }
    public String getDescription() { return description; }
    public String getUrl() { return url; }
    public String[] getTags() { return tags; }
}
