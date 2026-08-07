<template>
  <div class="row gallery mx-1">
    <div class="img-container" :style="getOrder(i)" :key="i" v-for="(image, i) in getImages()">
      <div @click="preview(image)" class="overlay">
        <h5 class="center">See full image</h5>
      </div>
      <img :src="image" class="center" alt="" loading="lazy" />
    </div>
    <div v-if="getShowLink()" class="col-sm-12 col-md-3 link-container">
      <a class="gallery-link" :href="'#gallery'">View Gallery</a>
    </div>
  </div>
  <!-- Creates the bootstrap modal where the image will appear -->
  <div class="img-modal" v-show="isShowModal">
    <button @click="closeModal" type="button" class="btn-close " aria-label="Close">
      &#x2715;
    </button>

    <img :src="previewImage" class="center" loading="lazy" />
  </div>
</template>

<script>
const IMAGES_PER_ROW = 4;

export default {
  name: "AppGallery",
  props: {
    galleryName: String,
    images: Array,
    showLink: Boolean,
  },
  data() {
    return {
      currentImage: "",
    };
  },
  computed: {
    previewImage() {
      if (this.currentImage !== "") {
        return this.currentImage;
      }
      return "";
    },
    isShowModal() {
      return this.currentImage !== "";
    },
  },
  mounted() { },
  methods: {
    closeModal(event) {
      if (event.target.tagName === "IMG") return;
      this._setCurrentImage("");
    },
    getImages() {
      console.log(this.images)
      return this.images;
    },
    preview(img) {
      this._setCurrentImage(img);
    },
    getShowLink() {
      console.log(this.showLink);
      if (this.showLink == null) {
        return false;
      } else {
        return this.showLink;
      }
    },
    getOrder(index) {
      return "--order:" + (index % IMAGES_PER_ROW) + ";";
    },
    _setCurrentImage(img) {
      this.currentImage = img;
    },
  },
};
</script>

<style scoped>
/*Modal*/
.img-modal {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}

.img-modal img {
  max-height: 75%;
  max-width: 75%;
  object-fit: contain;
  opacity: 1 !important;
}

.img-modal button {
  position: absolute;
  height: 3rem;
  width: 3rem;
  font-size: 2rem;
  top: 5vh;
  right: 0;
  transform: translate(-50%, 50%);
  z-index: 10;
}

/*End modal*/

/*Gallery image*/
.overlay {
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  position: absolute;
  height: calc(100% - 10px);
  width: calc(100% - 10px);
  z-index: 2;
  text-align: center;
}

.overlay:hover {
  opacity: 1;
  cursor: pointer;
}

.img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  padding: 10px 10px;
  transition-delay: calc(200ms * var(--order)) !important;
  position: relative;
}

/* Custom classes for close button */
.btn-close {
  /* Add your button styles here, e.g., padding, background-color, border, etc. */



  border: none;
  color: white;

  cursor: pointer;
}

.btn-close:hover {
  /* Add hover styles here, e.g., change background-color on hover */
  background-color: #555;
}

.link-container {
  padding: 10px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gallery-link {
  font-weight: bold;
  font-size: 1.2rem;
  color: var(--color-text);
  text-decoration: none;
}

.gallery-link:hover {
  color: var(--vt-c-indigo);
}

img {
  width: 100%;
  object-fit: cover;
  aspect-ratio: 1/1;
}

/*Animation*/
/* .one-hidden {
  opacity: 0;
  transform: translateX(calc(-25% * (var(--order) + 1)));
  transition: all 1s;
}
.animated-show {
  opacity: 1;
  transform: translateX(0);
} */

/*Mobile Gallery*/
@media (max-width: 992px) {
  .img-container {
    padding: 10px 5px;
    min-height: 20vh;
    transition-delay: 0ms !important;
    width: 100%;
  }

  img {
    width: 100%;
    opacity: 1;
    /* aspect-ratio: auto; */
    /* object-fit: cover; */
  }
}
</style>