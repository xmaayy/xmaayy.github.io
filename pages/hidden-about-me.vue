<template>
  <div>
    <div>
      <the-header></the-header>
      <main>
        <div class="bg-white bigtitle text-center">Who Am I?</div>
        <div class="flex justify-center">
          <div class="text-center ramblings w-1/2" style="padding-bottom: 20px">
            I'm not totally knowing exactly who I am matters. Below you can find
            the statistics that represent how the majority of my life is spent.
            These stats should give you a more truthful idea of who I am than
            any curated set of images or writings would portray, just as looking
            at someones code will tell you a lot more about how good of a
            developer they are than looking at their resume ever would. My goal
            with this site is not to become the next influencer or blogger with
            a wisdom podcast, but rather to share what I think are interesting
            bits of information, photos, and other projects that I've put a
            significant amount of effort in. As you can probably tell by the
            quality of this website (and some of the odd CSS variable names)
            this site is entirely self made as an attempt to lean JS / CSS.
            Please be nice :)
          </div>
        </div>
        <hr />
        <div class="justify-center" style="padding-top: 15px padding-bottom: 20px">
          <div class="subtitle text-center">Days Spent Coding</div>
          <div class="calendar w-2/3 shadow-lg rounded-lg">
            <!-- Loading stuff -->
            Please hold.
          </div>
        </div>
        <hr/>
        <div class="justify-center text-center subtitle" style="padding-top: 15px">Youtube Watchtime</div>
        <div class="justify-center text-center ramblings" style="padding-top: 15px">
            Unfortunately you're gonna have to trust me on this one because as far as I know
            there is no way to fetch your youtube watch time other than look on a phone
            app.
        </div>
        <div class="flex justify-center" style="padding-top: 15px">
          <div class="w-2/3 shadow-lg rounded-lg justify-center">
            <canvas id="youtubeChart" width="400" height="150"></canvas>
          </div>
        </div>
      </main>
    </div>
    <script src="Chart.bundle.min.js" />
    <script src="random.js" />
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    "the-header": Header,
  },
};
</script>

<style>
.bigtitle {
  font-family: "quicksand";
  font-weight: "400";
  font-size: 64px;
}
.subtitle {
  font-family: "quicksand";
  font-weight: "400";
  font-size: 32px;
}
.ramblings {
  font-family: "quicksand";
  font-weight: "600";
  font-size: 20px;
}
canvas{
    margin: 0 auto;
}
</style>
