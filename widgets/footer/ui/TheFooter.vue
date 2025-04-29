<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <span>Is there a project?</span>
      </div>

      <div class="footer__middle">
        <div class="footer__middle--tagline">
          <h1 class="tagline__work">Let's work</h1>
          <h1 class="tagline__together">together</h1>
        </div>

        <div class="footer__middle--contacts">
          <address class="contact">
            <span class="contact--title"> For all questions </span>
            <a href="tel:+79202780068"> +7 (920) 278-00-68 </a>
            <a href="mailto:qtim@agency.com"> qtim@agency.com </a>
          </address>

          <address class="contact">
            <span class="contact--title"> Office in Russia </span>
            <span class="contact--detail"> 139 Ruben Station Lake Drew, NM 52678 </span>

            <div class="contact--icon">
              <Icon name="local:location" />
            </div>
          </address>

          <address class="contact">
            <span class="contact--title">Office in Dubai</span>
            <span class="contact--detail">139 Ruben Station Lake Drew, NM 52678 </span>

            <div class="contact--icon">
              <Icon name="local:location" />
            </div>
          </address>
        </div>
      </div>

      <div class="footer__bottom">
        <ul class="footer__bottom--socials">
          <li class="social">
            <a href="/" target="_blank">Facebook</a>
          </li>
          <li class="social">
            <a href="/" target="_blank">Instagram</a>
          </li>
          <li class="social">
            <a href="/" target="_blank">Telegram</a>
          </li>
        </ul>

        <div class="footer__bottom--go">
          <span>Go</span>
        </div>

        <ul class="footer__bottom--socials">
          <li class="social">
            <a href="/" target="_blank">Behance</a>
          </li>
          <li class="social">
            <a href="/" target="_blank">LinkedIn</a>
          </li>
          <li class="social">
            <a href="/" target="_blank">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  @apply bg-primary-100 pt-32 px-8;

  &__container {
    @apply mx-auto;
    max-width: 76rem;
  }

  &__middle {
    @apply flex mt-14;

    &--tagline {
      @apply w-max text-9xl;
    }

    &--contacts {
      @apply space-y-9;
      margin-left: auto;
      transition: all ease-in-out 200ms;

      @media (min-width: 1280px) {
        margin-left: 25%;
      }
    }
  }

  &__bottom {
    @apply flex items-end justify-between mt-36;

    &--go {
      @apply relative p-0 rounded-none rounded-tl-full rounded-tr-full;
      @apply text-white text-4xl bg-neutral-900;
      width: 200px;
      height: calc(200px / 2);
      transition: all ease-in-out 200ms;

      @media (min-width: 1280px) {
        width: 358px;
        height: calc(358px / 2);
      }

      span {
        @apply absolute bottom-6 left-1/2;
        transform: translateX(-50%);
      }
    }

    &--socials {
      @apply flex space-x-8 mb-7;
    }
  }
}

.contact {
  @apply flex flex-col w-40 not-italic;

  &--title {
    @apply mb-3;
  }

  &--detail {
    @apply mb-2;
  }

  &--icon {
    @apply rounded-full cursor-pointer bg-neutral-950 w-8 h-8 flex justify-center items-center;
  }
}

.tagline {
  &__work {
    @apply relative;

    &::before {
      content: "";
      position: absolute;
      bottom: -2px;
      width: 100%;
      height: 2px;
      background-color: black;
    }
  }

  &__together {
    @apply relative;

    &::before {
      content: "";
      position: absolute;
      bottom: -2px;
      width: 16%;
      height: 2px;
      background-color: black;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: -2px;
      right: 18%;
      width: 50%;
      height: 2px;
      background-color: black;
    }
  }
}

.social {
  @apply relative;

  &::before {
    content: "";
    position: absolute;
    bottom: -2px;
    width: 100%;
    height: 0.5px;
    background-color: black;
  }
}
</style>
<script setup lang="ts">
</script>