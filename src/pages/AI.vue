<template>   
<div>
  <div class="content">
   <input id="check1" class="check" type="radio" name="AI" />
   <label class="label" for="check1"> Translate - Amazon Translate </label>
   <TranslateText />
  </div>

  <div class="content">
   <input id="check2" class="check" type="radio" name="AI" />
   <label class="label" for="check2"> Indentify Labels - Amazon Rekognition </label>
   <IdentifyLabels />
  </div>


  <div class="content">
   <input id="check3" class="check" type="radio" name="AI" />
   <label class="label" for="check3"> Indentify Text - Amazon Rekognition </label>
   <IdentifyText />
  </div>

  <div class="content">
   <input id="check4" class="check" type="radio" name="AI" />
   <label class="label" for="check4"> Interpret Text - Amazon Comprehend </label>
   <InterpretText />
  </div>

  <div class="content">
   <input id="check5" class="check" type="radio" name="AI" />
   <label class="label" for="check5"> Text to Speech - Amazon Polly </label>
   <TextSpeech />
  </div>  
</div>
</template>

<script>

import TranslateText from '@/components/TranslateText.vue';
import IdentifyLabels from '@/components/IdentifyLabels.vue';
import IdentifyText from '@/components/IdentifyText.vue';
import InterpretText from '@/components/InterpretText.vue';
import TextSpeech from '@/components/TextSpeech.vue';

export default {
  components: {
    TranslateText,
    IdentifyLabels,
    IdentifyText,
    InterpretText,
    TextSpeech,
  },
};
</script>
