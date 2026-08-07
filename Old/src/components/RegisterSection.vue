<template>
  <div class="w-full flex justify-center items-center mb-9">
    <div
     class="w-[90%] md:w-[80%] bg-gradient-to-br from-[#282828] to-[#EDC00111] backdrop-blur-sm rounded-2xl p-8 shadow-2xl"
    >
      <div>
        <h2
          class="text-3xl lg:text-4xl font-semibold text-white tracking-[-2px] leading-2 w-[80%]"
        >
          Register Now
        </h2>
        <p class="mt-4 text-gray-300 leading-6 text-left text-lg font-thin">
          Registrations for
          <span class="font-bold text-[#EDC001]">Speech Olympiad</span> are open
          now. Time to own your voice!
        </p>
      </div>

      <section class="mt-6 flex justify-center">
        <a
         href="#register"
         class="flex items-center justify-center w-48 h-12 bg-[#a78e1d] text-gray-100 rounded-lg hover:bg-[#7d6c22] transition-colors hover:text-white font-bold text-xl"
>
  Register
</a>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterSection",
};
</script>
