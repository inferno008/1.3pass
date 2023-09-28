<template>
  <div>
    <header>
      <h1>MY PROJECT DETAILS</h1>
      <p>Explore my project logs</p>
    </header>

    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/qualification">Qualification</router-link></li>
      </ul>
    </nav>

    <!-- List Rendering with v-for -->
    <h2>Project List</h2>
    <table>
      <thead>
        <tr>
          <th>Project Name</th>
          <th>Programming Language or Tools</th>
          <th>Year Done</th>
        </tr>
      </thead>
      <tbody>
        <!-- Updated table content with project data -->
        <tr v-for="(project, index) in projects" :key="index">
          <td>{{ project.name }}</td>
          <td>{{ project.language }}</td>
          <td>{{ project.year }}</td>
        </tr>
      </tbody>
    </table>

    <!-- User Input with v-model -->
    <div>
      <label for="search">Search Project Name:</label>
      <input type="text" id="search" v-model="search" placeholder="Enter a project name">
    </div>

    <!-- Filtering projects based on user input -->
    <button @click="filterProjects">Filter Projects</button>

    <!-- Display filtered projects -->
    <table v-if="filteredProjects.length > 0">
      <thead>
        <tr>
          <th>Project Name</th>
          <th>Programming Language or Tools</th>
          <th>Year Done</th>
        </tr>
      </thead>
      <tbody>
        <!-- Render filtered projects -->
        <tr v-for="(project, index) in filteredProjects" :key="index">
          <td>{{ project.name }}</td>
          <td>{{ project.language }}</td>
          <td>{{ project.year }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import './style.css';

export default {
  name: 'PriceList',
  data() {
    return {
      projects: [
        { name: 'Project 1', language: 'Python', year: '2021' },
        { name: 'Project 2', language: 'HTML, CSS, JavaScript', year: '2021' },
        { name: 'Project 3', language: 'MySQL', year: '2022' },
        { name: 'Project 4', language: 'Wireshark, Cisco Packet Tracer', year: '2022' },
        { name: 'Project 5', language: 'Nessus', year: '2023' },
        { name: 'Project 6', language: 'HTML, CSS, JavaScript', year: '2023' },
        { name: 'Project 7', language: 'Basic Concepts', year: '2023' },
        { name: 'Project 8', language: 'JavaScript', year: '2023' }
      ],
      search: '',
      filteredProjects: [],
    };
  },
  methods: {
    filterProjects() {
      // Implement filtering logic based on user input (this.search)
      // Update this.filteredProjects with the filtered projects
      const searchTerm = this.search.toLowerCase();
      this.filteredProjects = this.projects.filter(project => project.name.toLowerCase().includes(searchTerm));
    },
  },
};
</script>
