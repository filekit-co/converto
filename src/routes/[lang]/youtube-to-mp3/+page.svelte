<script lang="ts">
  import {PUBLIC_YOUTUBE_TO_URL} from '$env/static/public';
  import type {UpdateFeatureProps} from '$lib/types';
  import Feature from '@components/home/Feature.svelte';
  import {i} from '@inlang/sdk-js';
  import {IconArrowNarrowRight} from '@tabler/icons-svelte';

  const csrProps: UpdateFeatureProps = {
    head1: i('The best YouTube to MP3 Converter & Downloader'),
    head2: i(
      'Download MP3 files from YouTube videos and save them on your computer'
    ),
    description: i('The faster YouTube to MP3 video downloader ever created!'),
    subHead: [
      i('Fast YouTube to MP3 conversion'),
      i('Free video downloader'),
      i('Download YouTube videos without software'),
      i('Select a YouTube video'),
      i('Paste the YouTube URL link'),
      i('Download YouTube video to MP3')
    ],
    subDescription: [
      i(
        'Filekit.co is by far the fastest online video converter in the world.'
      ),
      i(
        'This YouTube to MP3 video downloader is free for everyone and forever.'
      ),
      i(
        'You can convert a YouTube video to MP3 anonymously, we are not collecting your personal data.'
      ),
      i(
        "Visit YouTube website, find and play the video you want to download and copy it's URL link."
      ),
      i(
        'Paste the YouTube video URL link in the above search field to start MP3 conversion.'
      ),
      i('Click the save button to download the Youtube video in MP3')
    ]
  };
</script>

<div class="w-full px-2 py-32 sm:px-20 lg:px-32 text-center mx-auto">
  <div class="join">
    <h2 class="text-[clamp(2rem,6vw,4.5rem)] font-black join-item">
      <span class="text-[#FF0000]">Youtube</span> to&nbspMP3
    </h2>
  </div>
  <p class="text-base-content/60 font-title py-4 font-light md:text-2xl">
    {i('The best YouTube to MP3 Converter & Downloader')}
  </p>
  <a
    href={PUBLIC_YOUTUBE_TO_URL}
    class="btn bg-[#FF0000] text-white btn-lg btn-wide px-12 normal-case"
  >
    {i('Start')}
    <IconArrowNarrowRight />
  </a>
  <div class="mt-24 rounded-2xl bg-base-200 leading-loose">
    <div class="p-8">
      <h2 class="text-2xl font-bold">{i('Convert YouTube to MP3')}</h2>
      <div class="text-justify mt-10 text-md">
        <p class="font-bold">{i('Fast & Free Download')}</p>
        <p>
          {i(
            'Looking for a reliable solution to convert YouTube videos to MP3?           Filekit.co offers an advanced online tool for seamless YouTube to MP3           conversion, along with a range of other formats.'
          )}
        </p>
        <p>
          {i(
            'With our user-friendly Web-App, you can easily download YouTube           content in AAC, M4A, PUS, Vorbis, FLAC, ALAC, and WAV formats,           absolutely free.'
          )}
        </p>
        <br />
        <p class="font-bold">
          {i('Convert YouTube to MP3 - Simple Steps for Free Download')}
        </p>
        <ol class="list-inside list-decimal">
          <li>
            {i('Discover the YouTube video you want to convert and download.')}
          </li>
          <li>
            {i(
              "Start the video playback, then copy the video URL from your             browser's address bar."
            )}
          </li>
          <li>
            {i(
              'Access our fast and efficient Web-App, and paste the video URL into             our converter. Choose your preferred format, such as MP3 or MP4. If             no format is specified, the default conversion will be to MP3.'
            )}
          </li>
          <li>
            {i(
              'Initiate the conversion process with a single click. We strive to             provide high-quality conversions, but please note that videos longer             than 90 minutes may take a bit longer.'
            )}
          </li>
          <li>
            {i(
              'Once the video is converted, simply click the Download button to get             your file instantly.'
            )}
          </li>
        </ol>
        <br />
        <p class="font-bold">
          {i('Unlock the Power of YouTube - Free, Safe, and Secure.')}
        </p>
        <p>
          {i(
            "Filekit.co's Web-App ensures your safety and security while using our           service. Feel confident knowing that our platform adheres to industry           standards and that your personal information is protected. Experience           the next level of YouTube to MP3 conversion with Filekit.co -           recommended by satisfied users worldwide."
          )}
        </p>
      </div>
    </div>
  </div>

  <Feature {csrProps} />
</div>
