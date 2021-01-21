<template>
    <div>
        <div id="video-pleer">
            <div class="row">
                <div class="col-12 col-lg-7">
                    <div class="main-video">
                        <iframe width="100%" height="409" :src="currentVideoSource" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div class="col-12 col-lg-5 play-list-block">
                    <div class="play-list">
                        <ul class="pl-0 mb-0">
                            <li class="cursor-pointer" :class='{ "active-li" : video.isActiveLink }' v-for="(video, index) in videoBase" :key="index" @click="chooseVideo(video.videoSource, index)">
                                <div class="row">
                                   <div class="col-1 svg-play pr-0 pl-4">
                                        <PlayCircleIcon/>
                                    </div> 
                                    <div class="col-10 col-sm-8">
                                        <span>
                                            {{ video.title }}
                                        </span>
                                    </div> 
                                    <div class="col-2 col-sm-3">
                                        <span class="video-duration">
                                            {{ video.duration }}
                                        </span>
                                    </div> 
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {
    PlayCircleIcon 
} from 'vue-feather-icons'
import translate from './../translation/translate'
export default {
  name: 'videoComponent',
  components: {
    PlayCircleIcon
  },
  data() {
      return {
          currentVideoSource: "",
          translation: translate,
      }
  },
  methods : {
      chooseVideo(source, index) {
          var self = this
          self.currentVideoSource = source;
          for (let i = 0; i < self.videoBase.length; i++) {
              
              if (self.videoBase[i].title == self.videoBase[index].title) {
                  self.videoBase[i].isActiveLink = true
              } else {
                  self.videoBase[i].isActiveLink = false
              }
          }
      } 
  },
  metaInfo() {
        return { 
            title: "Видеоуроки по пользованию системой эдо Faktura",
            meta: [
                { name: 'description', content:  'Видеоролик где подробно описывается все взаимодействие с системой электронного документооборота Faktura. Остались вопросы? Звоните ☎️: +998 (71) 200-00-13.'},
            ]
        }
    },
  computed: {
      videoBase() {
          return [
            {
                title: this.translation.translate('videolessons', 'videopleer1'),
                videoSource: "https://www.youtube-nocookie.com/embed/t6P-oAjqoLg",
                isActiveLink: false,
                duration: "5:12"
            },
            {
                title:  this.translation.translate('videolessons', 'videopleer2'),
                videoSource: "https://www.youtube-nocookie.com/embed/4MWjz2v84lU",
                isActiveLink: false,
                duration: "5:44"
            },
            {
                title:  this.translation.translate('videolessons', 'videopleer3'),
                videoSource: "https://www.youtube-nocookie.com/embed/dyW1dbQbg2w",
                isActiveLink: false,
                duration: "1:39"
            },
            {
                title:  this.translation.translate('videolessons', 'videopleer4'),
                videoSource: "https://www.youtube-nocookie.com/embed/4X4XbTBXcTs",
                isActiveLink: false,
                duration: "1:05"
            },
            {
                title:  this.translation.translate('videolessons', 'videopleer5'),
                videoSource: "https://www.youtube-nocookie.com/embed/J3Sgf-KmFxw",
                isActiveLink: false,
                duration: "1:04"
            },
            {
                title:  this.translation.translate('videolessons', 'videopleer6'),
                videoSource: "https://www.youtube-nocookie.com/embed/x63G9viXQUU",
                isActiveLink: false,
                duration: "0:53"
            },
            {
                title:  this.translation.translate('videolessons', 'videopleer7'),
                videoSource: "https://www.youtube-nocookie.com/embed/ynhsyyKoCiU",
                isActiveLink: false,
                duration: "0:53"
            },
            {
                title:  this.translation.translate('videolessons', 'videopleer8'),
                videoSource: "https://www.youtube-nocookie.com/embed/9wp8x9qWxWo",
                isActiveLink: false,
                duration: "1:18"
            },
            {
                title:  this.translation.translate('videolessons', 'videopleer9'),
                videoSource: "https://www.youtube-nocookie.com/embed/qeHQ13vZuRM",
                isActiveLink: false,
                duration: "4:36"
            },
            {
                title:  this.translation.translate('videolessons', 'videopleer10'),
                videoSource: "https://www.youtube-nocookie.com/embed/aR9p7RAkrKI",
                isActiveLink: false,
                duration: "2:25"
            },
            {
                title:  this.translation.translate('videolessons', 'videopleer11'),
                videoSource: "https://www.youtube-nocookie.com/embed/-7Z3F12M6y8",
                isActiveLink: false,
                duration: "2:01"
            },
        ]
      }
  },
    mounted() {
        this.chooseVideo("https://www.youtube-nocookie.com/embed/t6P-oAjqoLg", 0)
    }
}
</script>

<style>
#video-pleer {
    background: #282B32;
    margin-top: 25px;
    margin-top: 123px !important;
    margin-bottom: 123px !important;
    width: 70%;
    margin: 0 auto;
}
#video-pleer .main-video iframe{
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 15px;
    height: 500px;
}
#video-pleer .play-list ul .active-li {
    background-color: #282B32;
    color: greenyellow;
}
#video-pleer .play-list ul li {
    background-color: #191c21;
    color: white;
    font-size: 15px;
    padding: 20px 0;
    border-bottom: 3px solid #282b32;
}
#video-pleer .play-list ul li svg {
    width: 17px;
    /* margin-left: 17px;
    margin-right: 9px; */
}

#video-pleer .play-list ul li .video-duration {
    float: right;
    margin-right: 25px;
}

#video-pleer .play-list ul li .svg-play {
    display: flex;
    align-items: center;
}

#video-pleer .play-list-block .play-list{
    height: 485px;
    overflow: hidden;
    overflow-y: scroll;
}

#video-pleer .play-list-block .play-list::-webkit-scrollbar {
  width: 10px;
}

#video-pleer .play-list-block .play-list::-webkit-scrollbar-thumb {
    background: #454b56;
    border-radius: 15px;
}


</style>
