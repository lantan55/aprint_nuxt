<template>
  <v-app-bar app elevate-on-scroll clipped-left>
    <v-layout row justify-center>
      <v-flex xs6>
        <v-toolbar-items>
          <v-list-item two-line>
            <v-list-item-icon>
              <v-icon class="icon">fas fa-phone</v-icon>
            </v-list-item-icon>
            <v-list-item-content class="contacts">
              <v-list-item-title class="contacts-title">{{ siteOption.phoneBase }}</v-list-item-title>
              <v-list-item-subtitle class="contacts-subtitle">Позвонить нам</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item two-line>
            <v-list-item-icon>
              <v-icon class="icon">fas fa-envelope</v-icon>
            </v-list-item-icon>
            <v-list-item-content class="contacts">
              <v-list-item-title class="contacts-title">{{ siteOption.mailBase }}</v-list-item-title>
              <v-list-item-subtitle class="contacts-subtitle">Запросить расчет</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item two-line>
            <v-list-item-icon>
              <v-icon class="icon">fas fa-map-marker-alt</v-icon>
            </v-list-item-icon>
            <v-list-item-content class="contacts">
              <v-list-item-title class="contacts-title">{{ siteOption.address }}</v-list-item-title>
              <v-list-item-subtitle class="contacts-subtitle">{{ siteOption.addressDesc }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-toolbar-items>
      </v-flex>
    </v-layout>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({}),
  computed: {
    siteOption() {
      return this.$store.getters.siteOption;
    }
  }
};
</script>
<style lang="scss" scoped>
img {
  // width:150px;
}
.v-app-bar {
  &--fixed {
    background: var(--v-primary-base);
    .icon {
      color: var(--v-white-base);
    }
    .contacts {
      &-title {
        font-size: 1.3em;

        color: var(--v-white-base);
      }
      &-subtitle {
        font-size: 1em;
        color: var(--v-white-base);
      }
    }
  }
  &--is-scrolled {
    background: var(--v-white-base);
    .icon {
      color: var(--v-primary-base);
    }
    .contacts {
      &-title {
        color: var(--v-black-base);
      }
      &-subtitle {
        color: var(--v-black-base);
      }
    }
  }
}
</style>

