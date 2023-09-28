<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/qualification">Qualification</router-link></li>
      </ul>
    </nav>
    <!-- Router View -->
    <router-view />

    <!-- Header for Qualifications -->
    <h2>Click the button to see my qualifications</h2>

    <!-- Button to Display Qualifications -->
    <button @click="showQualifications">Click Me</button>

    <!-- Display Qualifications -->
    <div v-if="qualificationsVisible">
      <h2>My Qualifications</h2>
      <ul>
        <li>High School Grade 12</li>
        <li>Bachelor's Degree in Deakin</li>
        <li>Course Completion in Ethical Hacking (not CEH)</li>
        <li>Good Knowledge of Networking and Programming Languages</li>
      </ul>
    </div>

    <!-- Display Example Text -->
    <p v-if="showExampleText">{{ exampleText }}</p>

    <!-- Display "Received Event Data" when button is clicked -->
    <p v-if="showReceivedEventData">Received Event Data</p>
    
    <!-- Display Qualifications under "Received Event Data" -->
    <div v-if="showReceivedEventData && qualificationsVisible">
      <h2>My Qualifications</h2>
      <ul>
        <li>High School Grade 12</li>
        <li>Bachelor's Degree in Deakin</li>
        <li>Course Completion in Ethical Hacking (not CEH)</li>
        <li>Good Knowledge of Networking and Programming Languages</li>
      </ul>
    </div>

    <!-- Component Events [$emit] -->
    <custom-component-with-event @custom-event="handleCustomEvent"></custom-component-with-event>
    <p>Received Event Data: {{ eventData }}</p>

    <!-- Slots -->
    <custom-component-with-slot>
      <template v-slot:custom-slot>
        <p>Slot example</p>
      </template>
    </custom-component-with-slot>

    <!-- Additional Data Below Custom Component with Slot -->
    <div>
      <h2>Additional Data Below Custom Component</h2>
      <p>This is some additional content.</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'index',
  setup() {
    // Event data
    const eventData = ref("");

    // Event handler to receive data from the custom component
    const handleCustomEvent = (data) => {
      eventData.value = data;
    };

    // Example text and a flag to control its visibility
    const exampleText = ref("This is the example text.");
    const showExampleText = ref(false);

    // Flag to control the visibility of qualifications
    const qualificationsVisible = ref(false);

    // Flag to control the visibility of "Received Event Data"
    const showReceivedEventData = ref(false);

    // Function to toggle the display of qualifications
    const showQualifications = () => {
      qualificationsVisible.value = !qualificationsVisible.value;
      // Show "Received Event Data" when qualifications are shown
      showReceivedEventData.value = qualificationsVisible.value;
    };

    return {
      eventData,
      handleCustomEvent,
      exampleText,
      showExampleText,
      qualificationsVisible,
      showReceivedEventData,
      showQualifications,
    };
  },
};
</script>

