---
title: Digital amateur modes
description: Overview of digital communication modes for the radio amateur, including technical specifications, frequencies and software.
---

### <font color="green"><ins>APRS</ins></font>
Automatic Packet Reporting System (APRS) is a digital information platform that uses radio waves on amateur radio frequency bands. The system is based on Packet Radio modulation and usually operates at a data rate of 1200 baud. There is also a link to the APRS Internet System (APRS-IS), an internet backbone through which APRS traffic is exchanged worldwide.

Bob Bruninga (WB4APR) created the earliest predecessor of APRS on an Apple II computer in 1982. This first version was used to plot position reports from the US Navy, broadcast on the HF bands. In 1984, Bruninga built a more advanced version on a Commodore VIC-20 to report the position and status of horses in a 100-mile endurance race via radio waves. Over the following two years, Bruninga developed the system further and named it Connectionless Emergency Traffic System (CETS). After a number of FEMA exercises that used CETS, the full system was transferred to the IBM PC. During the early 1990s, CETS grew into what is now APRS. As GPS receivers became increasingly affordable, the use of GPS position reports via radio became more popular. Sometimes the abbreviation APRS is therefore interpreted as Amateur Position Reporting System, which however does not fully describe the capabilities of APRS.

APRS is not only used for position reporting. It can also be used to broadcast text messages, such as a burglar alarm in a building. It is comparable to the SMS system of the GSM network.

Furthermore, weather stations can be connected to the APRS-IS network. Those with a transmitting licence can also link via the radio network. This is an interesting application for, for example, real-time readings of weather conditions and positions of a weather balloon or a remote weather station. Software also exists that uses APRS weather data to make predictions about the weather, such as storms. This is mainly applied in the US by radio amateurs.

ARDF-Sync is a system where various radio receivers relay to each other from which direction a signal is strongest. By triangulation, the position of the transmitted signal can then be determined on a digital map.

Furthermore, the APRS protocol offers numerous lesser-known possibilities. One example is the Mile Marker system, which allows a marker (APRS object) to be sent on the map at the current position. This marker remains visible on the map even when the receiver moves. There is however no tracker that supports this.

In its most widespread form, APRS is transported over the packet radio protocol AX.25, with 1200 baud Bell 202 audio frequency-shift keying (AFSK) modulation on frequencies in the 2-metre amateur band (VHF).

#### <font color="blue"><ins>Frequencies</ins></font>
APRS:
- Europe: 144.800 MHz
- Australia: 145.175 MHz
- New Zealand: 144.575 (National APRS) and 144.650 MHz (digipeaters)
- Argentina: 144.930 MHz
- Brazil: 145.570 MHz
- North America: 144.390 MHz
- International Space Station: 145.825 MHz

In the Benelux, in busy areas the frequency 432.500 MHz in the 70 cm amateur band (UHF) is also used as a secondary access, to relieve the primary on 2 m. These are usually connected to each other and referred to as a CrossDigipeater.

An APRS digipeater on board the International Space Station makes it possible to exchange APRS messages over a large part of Europe, at the moment the ISS passes over Europe.

An APRS infrastructure is built on the same Terminal Node Controllers (TNCs) used in Packet Radio. APRS can use various TNCs, such as a classic TNC-2 or Baycom modem, a computer sound card, or a smart TNC. The latter can usually be connected directly to a GPS receiver and the radio transmitter. It is also smart enough to only transmit data when it has become outdated (after an interval), or when it changes rapidly (for example after taking a bend or junction). An example of a smart TNC is the TinyTrack from Byonics. Radio equipment with a built-in TNC is also available on the market. Connected to a GPS receiver, it uses a smart TNC to transmit the data. The transmitted data is usually also directly viewable on the device, which is not the case with separate TNCs. An example of such a device is the Kenwood TM-D710E.

Discarded commercial radio equipment is also converted to amateur bands and can be fitted with a smart tracker, so that a GPS receiver can be connected directly. The best-known example is the Bosch KF163 from the Jan Corver museum.
You can also build your own transmitter with the specific purpose of APRS. Usually it is then not possible to work on a different frequency. An example is the MicroTrack.

The backbone of the APRS network mostly consists of computers with one or more classic TNC-2s connected. This is because they are still the most reliable for decoding data and the smart logic can easily reside in the software on the computer. When an internet connection is available, the data can also be sent to APRS-IS and the computer also functions as an I-Gate. Usable computers range from old 80386 PCs to the latest models and even embedded systems. Software is available for Windows (UI-View32) as well as Linux (Xastir, DigiNed and Mac). Most Digipeaters use Linux in combination with DigiNed.

A status packet is a free field that can be filled with information about the current objective of the station, an email contact address, the frequency on which the sender can be reached by voice, or even simply the name of the sender.

A message packet can be used for point-to-point communication, general announcements and even internet email. Announcements are treated specially by most software and displayed in such a way that updates to announcements replace the original announcement. In this way one can quickly get a real-time overview in, for example, emergency situations of the status of nearby stations, such as the status of rescue workers and their position. Messages are sent to all online parties in real time. They are not stored, but will be repeated until they expire. The messaging system is linked to APRS-IS, which ensures that the system works globally, as long as the path to the destination is known. In this way messages can be sent worldwide between stations, with a radio link as the last mile.

The APRS protocol has been adapted and used for projects not directly related to the original purpose. The most notable projects are FireNet and PropNet. APRS FireNet is an internet-based system that uses the APRS protocol with usually the same software to transport data related to firefighting, earthquakes and weather information much faster than was originally possible with APRS.

PropNET uses the APRS protocol over AX.25 and PSK31 modulation to study the propagation of radio frequencies. PropNet transmitters transmit on various frequencies information about their position, transmit power, altitude and antenna gain. These data are received by worldwide receiving stations and by correlation via the internet it is possible to form a picture of the prevailing propagations.

OpenTrac was developed as an alternative to APRS that is cleaner and more functional than APRS. It is also an open protocol under open source licences. Due to the popularity of APRS, OpenTrac remains in the background.

### <font color="green"><ins>ASCII</ins></font>
The ASCII mode is one of the traditional modes used by radio amateurs, such as CW, RTTY and AMTOR. It has been used by radio amateurs since 1980. Note that in AMTOR, RTTY and ASCII reception, two filtered frequencies, each corresponding to a binary digit (1 or 0). These two frequencies, separated by a shift, modulate the RF when transmitted and the modulation is called Audio Frequency-Shift Keying (AFSK), otherwise the modulation can be done directly on the RF carrier and is called Frequency-Shift Keying (FSK). In HF amateur radio, AFSK is used when going through the MIC input of the transceiver, but FSK can also be used when going through the special input of the TX.

#### <font color="blue"><ins>Hobbyist software</ins></font>
ASCII:

- **Website: 
[MultiPSK](http://f6cte.free.fr/index_anglais.htm)**


| Item  | Description |
|---|---|
| Baud rate: | 110. A character consists of a « start » bit (1 « space »), 7 or 8 bits and a « stop » bit (2 « mark ») |
| Speed: | 110 wpm (7 bits) or 100 wpm (8 bits) |
| Modulation: | FSK two tones (« mark » and « space », "mark" high) with a shift of 170 Hz (or sometimes 200 Hz) |
| Receive mode: | USB |
| Character set: | 7-bit ASCII (or 8-bit ASCII for some languages), no parity |
| Pulse shape: | rectangular |
| Bandwidth: | 700 Hz (due to rectangular shape) |
| Demodulation: | non-coherent |
| Synchronisation: | asynchronous with start bit |
| Error correction: | no |
| Convolutional code: | no |
| Pmean/Ppeak: | 1 |
| Minimum S/N: | -2 dB |

#### <font color="blue"><ins>Frequencies</ins></font>
ASCII, 110 baud in kHz:
- 1838-1842
- 3580-3600
- 7035-7045
- 10140-10150
- 14070-14099
- 18100-18109
- 21080-21120
- 24920-24929
- 28050-28150
- 50100-50500
- 144600
- 144800-144990



### <font color="green"><ins>AUTEX - to be completed</ins></font>

### <font color="green"><ins>Amtor FEC-Navtex</ins></font>
The AMTOR mode is a traditional mode used by radio amateurs such as CW, RTTY and ASCII. RTTY, ASCII and AMTOR use two filtered frequencies, each frequency corresponding to a binary digit (1 or 0). These two frequencies, separated by a shift, modulate the RF when transmitted and the modulation is called Audio Frequency-Shift Keying (AFSK), otherwise the modulation can be done directly on the RF carrier and is called Frequency-Shift Keying (FSK).

#### <font color="blue"><ins>Hobbyist software</ins></font>
Amtor FEC-Navtex:

- Website: [MultiPSK](http://f6cte.free.fr/index_anglais.htm)

**AMTOR ARQ (also called SITOR-A for maritime use (as maritime mobile service system) or simply TOR)**

| Item | Description |
|---|---|
| Baud rate: | 100. A character consists of 4 «space» and 3 «mark» bits. A character block (called « Block 1 » or « Block 2 ») consists of three characters (total duration: 3 x 70 = 210 ms) and a pause of 240 ms propagation time. During this pause, the receiving station transmits a control signal of 70 ms to say «next block please» (symbol "ACK" for acknowledgement) or to request repetition of the last block, in case of an erroneous character (symbol "NACK" for not acknowledge) |
| Speed: | between 0 and 67 wpm (67 wpm corresponds to the 50 baud RTTY) depending on the number of repetitions |
| Modulation: | FSK two tones (« mark » and « space », "mark" high) with a shift between tones of 170 Hz |
| Receive mode: | USB |
| Character set: | CCIR476-4 (32 letters, 32 digits and 6 control, idle or phase signals) without error reset character ("fixed length" characters). In SITOR A the character set can be extended to Cyrillic characters by using the character for « unperforated tape » (third shift). In AMTOR A the character set can be extended to ASCII characters (32 to 128) by using the character for the « unperforated tape » |
| Pulse shape: | rectangular |
| Bandwidth: | approximately 800 Hz (due to rectangular shape) |
| Demodulation: | non-coherent |
| Synchronisation: | automatic using the signal |
| Error correction: | yes via automatic repetition and easy detection of an erroneous character due to the specific content of a character (4 «space» and 3 «mark» bits) |
| Convolutional code: | no |
| Interleaving: | no |
| Pmain/Ppeak: | 1 |
| Note: | In AMTOR ARQ LISTEN characters are translated as best as possible because no repetition can be requested. Therefore the reception quality is generally not very good |

**AMTOR FEC (also called SITOR-B for maritime use (as maritime mobile service system) or simply FEC) collective B-mode**

| Item | Description |
|---|---|
| Baud rate: | 100. A character consists of 4 «space» and 3 «mark» bits. It is a continuous stream of characters, unlike AMTOR ARQ. |
| Speed: | 71 wpm |
| Modulation: | FSK two tones (« mark » and « space », "mark" high) with a shift between tones of 170 Hz |
| Receive mode: | USB |
| Character set: | CCIR476-4 (32 letters, 32 digits and 6 control, idle or phase signals) without error correction character («fixed length» characters). Lowercase characters are converted to uppercase and special characters such as « é » are converted to standard uppercase (in the example: « E ») |
| Pulse shape: | rectangular |
| Bandwidth: | approximately 800 Hz (due to rectangular shape) |
| Demodulation: | non-coherent |
| Synchronisation: | automatic using the signal |
| Error correction: | no |
| Convolutional code: | no |
| Interleaving: | each character is repeated 5 positions later (that is 350 ms between 2 transmissions of the same character). This time diversity allows the correction of an erroneous character. Detection is simple due to the specific content of a character (4 «space» and 3 «mark») |
| Pmain/Ppeak: | 1 |
| Minimum S/N: | around -5 dB |
| Note: | There are 2 FEC modes: the collective B-mode (described above) and the selective B-mode (small differences such as inversion of bits) |

#### <font color="blue"><ins>Frequencies</ins></font>
Amtor FEC-Navtex, USB, sometimes LSB:
- The same frequencies as for RTTY 45 baud, particularly around 14.075 kHz. See below.

RTTY 45 baud (50 and 75 baud) in kHz:
- 1838-1842
- 3580-3600
- 7035-7045
- 10140-10150
- 14070-14099
- 18100-18109
- 21080-21120
- 24920-24929
- 28050-28150
- 50100-50500
- 144600
- 144800-144990

### <font color="green"><ins>BPSK31 and QPSK31</ins></font>
The BPSK31 and QPSK31 modes are designed to ensure communication with a signal-to-noise ratio down to 0.1 (-11.5 dB, for a PC at 166 MHz or higher). The speed is 37 wpm in uppercase and 51 wpm in lowercase. When we say PSK31, this refers to a general term for BPSK31 and QPSK31. Thanks to the convolutional coding of QPSK31, the number of errors can be reduced.

| Item | Description |
|---|---|
| Created by | Peter Martinez G3PLX |
| Baud rate | 31.25 |
| Speed | 37 wpm in uppercase and 51 wpm in lowercase (average) |
| Modulation | DBPSK. Receive mode: LSB or USB only for BPSK31, for QPSK31 USB |
| Character set | ASCII characters + ANSI extended characters + an error reset character ("Varicode" characters) |
| Pulse shape | raised cosine |
| Bandwidth | approximately 80 Hz |
| Demodulation | coherent |
| Synchronisation | automatic using the signal |
| Error correction | no |
| Convolutional code | no for BPSK31, yes for QPSK31 (rate=1/2, constraint length=5, using Viterbi decoder) |
| Interleaving | no |
| Automatic frequency correction | approximately +/- 10 Hz depending on signal-to-noise ratio |
| Drift tolerance | 60 Hz/min in BPSK31 and 20 Hz/min in QPSK31 (depending on level) |
| Pmean/Ppeak | 0.79 for BPSK31 and 0.35 for QPSK31 |
| Minimum S/N | -11.5 dB |
| Waterfall range | 200 to 4300 Hz (for Multipsk) |
| Note | the BPSK31 mode is widely used, QPSK31 is not used as much |

#### <font color="blue"><ins>Frequencies</ins></font>
BPSK31 and QPSK31, USB in kHz:
- 1838
- 3580
- 7035
- 10140
- 14070
- 18100
- 21080
- 24920
- 28070
- 28120
- 50000
- 144000 (144605 in France and 144144 in Italy)

#### <font color="blue"><ins>Hobbyist software</ins></font>
BPSK31 and QPSK31:

- Website: **[MultiPSK](http://f6cte.free.fr/index_anglais.htm)**

### <font color="green"><ins>BPSK63, QPSK63</ins></font>
The new BPSK63 and QPSK63 modes are derived from BPSK31/QPSK31, but they are twice as fast. The minimum signal-to-noise ratio is approximately -7 / -8 dB. PSK63F is similar to PSK63 but with convolutional coding.

#### <font color="blue"><ins>BPSK63 and QPSK63</ins></font>

| Item | Description |
|---|---|
| Created by | Moe Wheatley (AE4JY) and Howard Teller (KH6TY) in 2003 |
| Baud rate | 62.5 |
| Speed | 74 wpm in uppercase and 102 wpm in lowercase (average) |
| Bandwidth | approximately 160 Hz |
| Drift tolerance | 120 Hz/min in BPSK63 and 40 Hz/min in QPSK63 (depending on level) |
| Minimum S/N | -7 dB for BPSK63 and -8 dB for QPSK63 |
| Note | otherwise the characteristics are identical to those of the BPSK31/QPSK31 modes |

#### <font color="blue"><ins>Frequencies</ins></font>
BPSK63 and QPSK63, USB:

- 14072.5 - 14080 kHz. It is recommended to use fixed frequencies in multiples of 100 Hz: 14072.5, 14072.6, 14072.7... For this the user sets their transceiver to 14072 kHz and USB and works at 500, 600, 700,..., 2400 or 2500 Hz on the spectrum indicator.

### <font color="green"><ins>PSK63F</ins></font>

The PSK63F mode has the same speed (62.5 baud) as PSK63, but with convolutional coding. It is a powerful mode in the presence of noise. The minimum signal-to-noise ratio is approximately -12 dB.

| Item | Description |
|---|---|
| Created by | Nino Porcino IZ8BLY |
| Baud rate | 62.5 |
| Speed | 42 wpm (average) |
| Modulation | DBPSK |
| Receive mode | LSB or USB |
| Character set | ASCII characters + almost all ANSI extended characters + an error reset character ("Varicode" characters) |
| Pulse shape | raised cosine |
| Bandwidth | around 140 Hz |
| Synchronisation | automatic using the signal |
| Error correction | no |
| Convolutional code | R(Rate)=1/2, K(Constraint length)=7 with Viterbi type decoder, both encoder outputs are transmitted sequentially |
| Drift tolerance | 1 Hz/sec (depending on signal-to-noise ratio) |
| Pmean/Ppeak | 0.79 |
| Minimum S/N | -12 dB in text and -10 dB in DIGISSTV |
| Interleaving | no |

#### <font color="blue"><ins>Frequencies</ins></font>
PSK63 and DIGISERV, USB:

The modes (except PSK220F) such as PSK63F and PSK10, PSKFEC31, PSK63F+DIGISSTV, PSKAM10/31/50 are QRP transmissions and are very rarely used. It is suggested to focus calls on the following frequencies and times:
* 14075 kHz USB (AF around 1000 Hz) at 17:00 UTC,
* 10148 kHz USB (AF around 1000 Hz) at 22:00 UTC.
* 144620 kHz USB (AF around 1000 Hz) at 20:00 UTC.

A CW prefix, at 12 or 20 wpm, indicating the mode used, software and power, for example: "VVV DE (a call) / MODE PSK63F / SOFT MULTIPSK / PWR: 5 WATTS" can be sent before the CQ call itself is made. The option of video identification of the mode, now included in MULTIPSK, allows the mode label (and/or other information) to be specified visually in CMT Hell before the main transmission.

#### <font color="blue"><ins>Hobbyist software</ins></font>
BPSK63, QPSK63 and PSK63F:

- Website: **[MultiPSK](http://f6cte.free.fr/index_anglais.htm)**

### <font color="green"><ins>BPSK125 and QPSK125</ins></font>

The new BPSK125 and QPSK125 modes are derived from BPSK31/QPSK31, but are four times faster. The minimum signal-to-noise ratio is approximately -5 dB.

| Item | Description |
|---|---|
| Created in | 2003 |
| Baud rate | 125 |
| Speed | 148 wpm in uppercase and 204 wpm in lowercase (average) |
| Bandwidth | around 320 Hz |
| Drift tolerance | 120 Hz/min in BPSK125 and 40 Hz/min in QPSK125 (depending on level) |
| Minimum S/N | -5 dB |
| Note | otherwise, except for the secondary channel, the characteristics are identical to those of the BPSK31/QPSK31 modes. |

The "secondary channel" specific to the Multipsk software. There are two sets of characters among the 256 ASCII and ANSI characters:
* a first set of 193 characters (the primary table) is used for current exchanges,
* a second set of 62 characters (the "secondary table") is used to automatically, continuously and repetitively transmit the following pieces of information "Call", "Name", "Locator", QTH while nothing is being sent, the QSO is in progress.

This is a kind of "intelligent idle spinning". These characters are displayed in a small window. The idle character, when nothing can be sent, is the character CHR(0). This secondary channel is interesting because the character flow in these modes is much better than the typing speed. It allows listeners to quickly have essential information between typed characters.

#### <font color="blue"><ins>Hobbyist software</ins></font>
BPSK125 and QPSK125:

- Website: **[MultiPSK](http://f6cte.free.fr/index_anglais.htm)**

#### <font color="blue"><ins>Frequencies</ins></font>
BPSK125 and QPSK125, USB in kHz:

- 1838
- 3580
- 7035
- 10140
- 14070
- 18100
- 21080
- 24920
- 28070
- 28120
- 50000
- 144000 (144605 in France and 144144 in Italy)

### <font color="green"><ins>CCW</ins></font>
CCW (Coherent CW)

Coherent CW is a purely digital mode because it is only done by computers (although it is readable by a human). The computer-produced keying is perfect for synchronisation and correct evaluation of the bit (dot or no dot). CCW (Coherent CW) was created for amateur radio by Raymond Petit (W6GHM) in 1975. The CCW presented here is derived from the "traditional" CCW with some modifications (F6CTE/DK5KE). For example, the standard speed is 12 wpm. Here the user can choose between 12, 24 and 48 wpm.

The minimum S/N ratio can be very low, down to -12 dB for the standard speed of 12 wpm, depending on the speed and the characters transmitted. The description made hereafter corresponds to the CCW of the software programme Multipsk, which has introduced some modifications (F6CTE/DK5KE) and new modifications in the Multipsk version 3.10.

| Item | Description |
|---|---|
| Created by: | Raymond Petit (W6GHM) in 1975 |
| Speed: | Standard 12 wpm. Here respectively 12, 24 or 48 wpm corresponding to a dot length of 100, 50 and 25 ms |
| Modulation: | On-off keying of an audio tone |
| Receive mode: | both (LSB or USB) |
| Character set: | A..Z 0..9 ? = / + and some other more or less used characters (type «Varicode» characters). The waiting character (_) is used as idle character. It is specific to CCW (from Multipsk) to keep synchronisation in case of absence of characters to transmit. The line feed character is converted to a "start of message" signal. Deleting a character is done by sending an error character (--------), correction taken into account by the receiver |
| Pulse shape: | rectangular |
| Bandwidth: | up to approximately 100 Hz depending on speed |
| Demodulation: | coherent |
| Synchronisation: | automatic using the signal |
| Error correction: | no |
| Convolutional code: | no |
| Interleaving: | no |
| Drift tolerance: | 15 to 25 Hz/min (depending on CCW speed and signal-to-noise ratio) |
| Pmean/Ppeak: | 0.5 but very variable |
| Minimum S/N: | the slower the CCW speed, the better the decoding. The minimum S/N ratio depends on the speed and the transmitted letters. For the standard speed (12 wpm) the minimum S/N is approximately -12 dB (-8 dB at 24 wpm and -5 dB at 48 wpm) |
| Note 1: | at the start of transmission, "CCW", a space and a waiting character (-_---) are transmitted. The user can, to save time, suppress the prefix CCW and its space, but the other operator will not know it is CCW |
| Note 2: | to not lose synchronisation, it is not possible to type more than one space between two words |

#### <font color="blue"><ins>Frequencies</ins></font>
For CCW, a mode close to CW, it is suggested to choose the following frequencies in kHz:

- 1844
- 3561
- 7031
- 10107
- 14061
- 21061
- 24907
- 28601

### <font color="green"><ins>CHIP (62/128)</ins></font>
The new CHIP (64/128) mode is a new PSK mode that uses the "Spread Spectrum" modulation technique and in particular Direct Sequence Spread Sequence (DSSS), via an original algorithm. This technique makes it possible to achieve a very robust mode. The minimum signal-to-noise ratio is -8 dB.

| Item | Description |
|---|---|
| Created by: | Nino Porcino IZ8BLY in 2005 |
| General: | this mode uses the "Spread Spectrum" modulation technique and in particular Direct Sequence Spread Sequence (DSSS), via an original algorithm |
| Chip rate: | 300/second (a "chip" is here a "bit" from the modulation point of view) |
| Bit rate (after pseudo WHP inverse transform): | 37.5 per second in CHIP64 and 21.09 in CHIP128 |
| Speed (words): | 48 wpm uppercase to 68 wpm lowercase (average in CHIP64). 27 wpm uppercase to 38 wpm lowercase (average in CHIP128) |
| Modulation: | DBPSK. A "block" consists of 64 chips in Chip64 and 128 in Chip128 |
| Receive mode: | both: LSB and USB |
| Character set: | ASCII characters + almost all extended ANSI characters + an error reset character ("Varicode" characters) |
| Pulse shape: | raised cosine |
| Bandwidth: | around 580 Hz |
| Synchronisation: | automatic using the signal |
| Error correction: | the use of the WHP transform is equivalent to a powerful "block" coding type |
| Convolutional code: | no |
| Interleaving: | no |
| Drift tolerance: | 15 Hz/minute (+/- depending on signal level) |
| Pmean/Ppeak: | 0.79 |
| Minimum S/N: | -8 dB |

#### <font color="blue"><ins>Hobbyist software</ins></font>
CHIP (62/128):

- Website: **[MultiPSK](http://f6cte.free.fr/index_anglais.htm)**

#### <font color="blue"><ins>Frequencies</ins></font>
CHIP (62/128), USB in kHz:
- 7090 (in USA)
- 14077
- 14110

### <font color="green"><ins>Contestia</ins></font>

Contestia, developed by Nick Fedoseev (UT2UZ) in 2005, is a digital mode derived from Olivia. It aims for a compromise between speed and performance.

Contestia performs very well under weak signal conditions. It decodes below the noise floor, but Olivia still outperforms it in this area by approximately 1.5 - 3 dB, depending on the configuration. Nevertheless, Contestia is two times faster than Olivia (e.g. Contestia 8/250 is twice as fast as Olivia 8/250).
Contestia uses a block size of 32 where Olivia uses a block size of 64. Contestia also uses a modified alphabet that is 6-bit encoded.

#### <font color="blue"><ins>Contestia submodes.</ins></font>

125, 250, 500, 1000 and 2000 are the available bandwidths. 4, 8, 16, 32, 64, 128 and 256 are the available tones. There are a total of 40 possible submodes.

The Contestia submodes are determined by the bandwidth and number of tones. This is represented in the format "Contestia X/Y" or "Contestia X-Y", where X = number of tones and Y = bandwidth. Y/X is also used as an alternative. E.g.: Contestia 8-250 = 8/250 = 250/8 = 8 tones, 250 Hz bandwidth.

The standard Contestia submodes (bandwidth/tones) are 4/125, 8/250, 16/500, 32/1000 and 64/2000.

The most commonly used submodes are 4/125, 4/250, 4/500, 8/250, 8/500 and 16/500.

#### <font color="blue"><ins>Mode characteristics:</ins></font>

- 8-250: "Slow" 8 tones, bandwidth=250, speed=31.25 baud, 29.2 wpm, minimum S/N=-13 dB
- 16-500: "Medium" 16 tones, bandwidth=500 Hz, speed=31.25 baud, 39 wpm, minimum S/N=-12 dB
- 32-1000: ("Standard") 32 tones, bandwidth=1000 Hz, speed=31.25 baud, 48.8 wpm, minimum S/N=-12 dB
- 8-500: "Normal" 8 tones, bandwidth=500 Hz, speed=62.5 baud, 58.6 wpm, minimum S/N=-10 dB
- 16-1000: "Fast" 16 tones, bandwidth=1000 Hz, speed=62.5 baud, 78.2 wpm, minimum S/N=-9 dB
- 4-500: "Fast 2" 4 tones, bandwidth=500 Hz, speed=125 baud, 78.2 wpm, minimum S/N=-8 dB
- 4-250: "Medium 2" 4 tones, bandwidth=250 Hz, speed=62.5 baud, 39 wpm, minimum S/N=-10 dB
- 8-1000: "Very fast" 8 tones, bandwidth=1000 Hz, speed=125 baud, 117 wpm, minimum S/N=-5 dB

#### <font color="blue"><ins>Hobbyist software</ins></font>
Contestia:

- Websites: **[MultiPSK](http://f6cte.free.fr/index_anglais.htm)**, **[Fldigi](https://sourceforge.net/projects/fldigi/files/)**, **[Ham Radio Deluxe](https://www.hamradiodeluxe.com/#)** and **[MixW](http://mixw.net)**

#### <font color="blue"><ins>Additional link</ins></font>
Contestia:

- Website: **[AC4M Digital Modes Contestia and RTTYM](http://ac4m.us/contestia_and_rttym.html)**



### <font color="green"><ins>CW (Morse)</ins></font>

Morse is a digital mode because it can easily be decoded by a computer, but it can be seen as a sort of non-digital code for Ham people who decode a Morse character, not as a sequence of dashes and dots, but as a certain "music". Therefore people reading Morse are better than programs.

| Item | Description |
|---|---|
| Speed: | currently 10 to 40 wpm (standard speed: 20 wpm) |
| Modulation: | On-Off keying of an audio tone (currently between 500 and 800 Hz) or of a simple HF carrier, but in that case there must be a difference between receive and transmit frequency, receive mode: LSB or USB |
| Character set: | A..Z 0..9 ? = / + and some other more or less used characters (type «Varicode» characters) |
| Pulse shape: | rectangular |
| Bandwidth: | up to approximately 100 Hz depending on speed |
| Demodulation: | non-coherent |
| Synchronisation: | on receipt of a dash or a dot |
| Error correction: | no |
| Convolutional code: | no |
| Interleaving: | no |
| Pmean/Ppeak: | 0.5 but very variable |
| Minimum S/N: | the slower the CW, the easier the decoding (one can for example reach –15 dB/−20 dB for a 20 wpm Morse decoded by a person), down to approximately 10 wpm (for a person) |

#### <font color="blue"><ins>Hobbyist software:</ins></font>
CW:

* Website: **[MultiPSK](http://f6cte.free.fr/index_anglais.htm)**

#### <font color="blue"><ins>Frequencies</ins></font>
CW in kHz:

- 135.7-137.8
- 1810-1838
- 3500-3580
- 7000-7035
- 10100-10140
- 14000-14070
- 18068-18100
- 21000-21080
- 21120-21149
- 24890-24920
- 28000-28050
- 28150-28190
- 50000-50100
- 144000-144150 (usually on 144050 or 144060)

### <font color="green"><ins>DominoEX</ins></font>

DominoEX, also simply called Domino, is an IFK (Incremental Frequency Keying) mode, developed by Murray Greenman ZL1BPU and Con Wassilieff ZL2AFP in 2004 and was the first fully developed iteration of the Domino IFK family modes used to send text over RF. It is the successor to the development versions DominoF and DominoG.

IFK (Incremental Frequency Keying) is used, where the data is not represented by the frequency of each tone, but by the frequency difference between one tone and the next. An additional technique, called Offset Incremental Keying (IFK+), is used to manage the tone sequence to counteract inter-symbol interference caused by multipath reception. This gives the mode a great improvement in robustness.

DominoEX is a computer-based radio mode intended for simplex chat mode on the lower HF bands, although performance is excellent from LF to VHF. You can even use any SSB transmitter, an old type "steam radio". DominoEX is an ideal mode for beginners, as it is easy to tune. DominoEX is designed to circumvent various problems that arise with other digital modes, such as difficult tuning, slow response and poor performance on the 160-40m bands.

DominoEX is a digital mode with MFSK (Multi-Frequency Shift Keying), used to transmit data (e.g. hand-typed text) via radio. MFSK transmits data using many different tones, sent one at a time. Each tone element ('symbol') can contain multiple bits of data, unlike most other modes, where each element represents only one bit. The symbol rate is thus much lower for the same data rate when MFSK is used. This is advantageous, as it leads to high sensitivity with a good data rate and a modest bandwidth.

| Mode | Baud | BW | Tones | Speed | FEC | Tone spacing |
|---|---|---|---|---|---|---|
| DominoEX 4 | 3.90625 | 173 Hz | 18 | ~25 WPM | ~12 WPM | Baudrate X2 |
| DominoEX 5 | 5.3833 | 224 Hz | 18 | ~31 WPM | ~16 WPM | Baudrate x2 |
| DominoEX 8 | 7.8125 | 346 Hz | 18 | ~50 WPM | ~25 WPM | Baudrate x2 |
| DominoEX 11 | 10.766 | 262 Hz | 18 | ~70 WPM | ~35 WPM | Baudrate x1 |
| DominoEX 16 | 15.625 | 355 Hz | 18 | ~100 WPM | ~50 WPM | Baudrate x1 |
| DominoEX 22 | 21.533 | 524 Hz | 18 | ~140 WPM | ~70 WPM | Baudrate x1 |

#### <font color="blue"><ins>Hobbyist software</ins></font>
DominoEX:

* Websites: **[AndFLMsg for Android devices](https://sourceforge.net/projects/fldigi/files/AndFlmsg/)**, **[Ham Radio Deluxe](https://www.hamradiodeluxe.com)** and **[MultiPSK](http://f6cte.free.fr/index_anglais.htm)**

#### <font color="blue"><ins>Frequencies</ins></font>
DominoEX in kHz:
* 1838
* 3580
* 7037
* 10147
* 14080
* 18105
* 21080
* 24929
* 28080

### <font color="green"><ins>DominoF</ins></font>

DominoF was the first experimental implementation of the Domino family of IFK modes, developed by Con Wassilieff ZL2AFP and Murray Greenman ZL1BPU in 2004. DominoF used dual interleaved tone sets.

DominoF had a baud rate of 10.766 Bd, 40 wpm. DominoF used only 16 tones, where DominoEX and THOR used 18.

| Item | Description |
|---|---|
| Created by: | Con Wassilieff ZL2AFP and Murray Greenman ZL1BPU in 2004 |
| Baud rate: | 10.766 |
| Speed: | 40 wpm (by removing synchronisation characters) |
| Modulation: | IFK (Incremental Frequency Keying) 16 tones but with two tone sets (J1 and J2) alternating to reduce ISI (Inter Symbol Interference) and enable fast synchronisation |
| Note: | In fact 18 tones (2 x 9) are used to limit rotations. A character consists of 2 symbols of 3 bits each, each symbol being transmitted on a tone set (first symbol on J1 and then second symbol on J2) |
| Receive mode: | USB or LSB, USB is recommended |
| Character set: | 62 characters (lowercase letters, digits and some punctuation) + an error reset character (6-bit long characters) + a synchronisation character |
| Pulse shape: | rectangular |
| Tone spacing: | 10.766 Hz |
| Bandwidth: | 213 Hz |
| Demodulation: | non-coherent |
| Synchronisation: | For the 3-bit symbols, using the signal. For the symbol sequence thanks to a block of 4 synchronisation characters sent by default after 12 characters |
| Convolutional code: | No |
| Interleaving: | No |
| Offset tolerance: | 65 Hz. This is the great advantage of this IFK mode, which can accommodate a tuning error of less than or equal to +/- 65 Hz |
| Drift tolerance: | 20 Hz/min (depending on signal-to-noise ratio). Within the band bounded by the offset tolerance, drift tolerance is greater than 200 Hz/min |
| Pmean/Ppeak: | 1 |
| Minimum S/N: | -12 dB |
| Note: | There are 2 other Domino modes at 7.8125 and 15.625 baud. They are conceived in the same way |

#### <font color="blue"><ins>Frequencies</ins></font>
DominoF in kHz:

- 1838
- 3580
- 7037
- 10147
- 14080
- 18105
- 21080
- 24929
- 28080

#### <font color="blue"><ins>Hobbyist software</ins></font>
DominoF:

* Website: **[MultiPSK](http://f6cte.free.fr/index_anglais.htm)**

#### <font color="blue"><ins>Additional link</ins></font>
DominoF:

* Website: **[DominoEX Technical](https://www.qsl.net/zl1bpu/MFSK/Technical.htm)**


### <font color="green"><ins>FEC31 - to be completed</ins></font>
### <font color="green"><ins>Feld Hell</ins></font>

FM Hell is a Hellschreiber mode. The Hellschreiber modes FELD HELL, PSK HELL, FM HELL and HELL 80 are graphic modes in which characters are drawn and interpretation is done by the user. For FELD HELL the transmission is done by On-Off keying (OOK) as in CW, by BPSK for PSK HELL and by AFSK in HELL 80 and FM HELL (MSK in fact).

#### <font color="blue"><ins>General</ins></font>

Feld Hell is a Hellschreiber mode. All Hellschreiber modes are "Fuzzy" modes. The rules to be "Fuzzy" are:
- the transmitter uses no encoding,
- the receiver does not decide when data is present,
- the receiver does not determine which data is present.
These modes are only readable by humans. They cannot be read by computers, unless an advanced neural system is used. In fact, the hypothesis is that recognition by human eyes/brain in context was better than a computer could be.

| Item | Description |
|---|---|
| Created by | Rudolph Hell in 1929 |
| Baud rate | 245 baud, but in fact it is a pseudo-122.5 baud (one "pixel" is 8.163 ms long) |
| Reading direction | column by column, from bottom to top and from left to right |
| Matrix: height | 7 pixels and width: 7 pixels…total of 49 pixels per character |
| Speed | 25 wpm |
| Modulation | On-off keying of an audio tone |
| Receive mode | both (USB or LSB) but generally USB |
| Character set | all printable ASCII characters except lowercase, carriage return (+ line feed) and error correction characters. The font used (FeldHell) is derived from the G3PLX (Peter Martinez) font |
| Pulse shape | raised cosine profile |
| Bandwidth | around 300 Hz |
| Synchronisation | not required, each column is displayed twice vertically (but transmitted once) |
| Pmean/Ppeak | 0.25 |
| Minimum S/N | -12 dB |

#### <font color="blue"><ins>Hobbyist software</ins></font>
Feld Hell:
* Website: **[MultiPSK](http://f6cte.free.fr/index_anglais.htm)**

#### <font color="blue"><ins>Frequencies</ins></font>
Feld Hell in kHz:

Recommended frequencies for FELD HELL (USB). Also applies to PSK HELL, FM HELL and HELL 80.

- 3580
- 7035
- 10135
- 14063
- 21063
- 28063

### <font color="green"><ins>FT4</ins></font>

FT4 is an experimental digital mode designed specifically for radio contests. Like FT8, it uses fixed-length transmissions, structured messages with formats optimised for minimum QSOs and strong forward error correction. T/R sequences are 6 seconds long, so FT4 is 2.5× faster than FT8 and approximately as fast as RTTY for radio contests. FT4 can work with signals 10 dB weaker than needed for RTTY, while using much less bandwidth.

FT4 message formats are the same as those in FT8 and encoded with the same (174,91) low-density parity check code. Transmissions last 4.48 s, compared to 12.64 s for FT8. Modulation uses 4-tone frequency-shift keying at approximately 23.4 baud, with tones separated by the baud rate. The occupied bandwidth (containing 99% of transmitted power) is 90 Hz. Threshold sensitivity for 50% decoding probability is S/N = −16.4 dB, measured in the standard 2500 Hz reference noise bandwidth. A priori (AP) decoding can lower the threshold sensitivity to -18 dB or better.

#### <font color="blue"><ins>Frequencies</ins></font>
FT4 in kHz:

- 3568
- 3575
- 7047.5
- 10140
- 14080
- 18104
- 21140
- 24919
- 28180
- 50318
- 144170

### <font color="green"><ins>FT8</ins></font>

FT8 ("Franke-Taylor design, 8-FSK modulation") is an extremely weak signal, digital, narrow bandwidth (50 Hz), QSO-only communication protocol used by amateur radio ("ham radio") operators. It is popular among amateur radio operators due to its ability to transmit signals despite challenging propagation conditions, high-noise environments, low power (QRP) operations or even compromised antennas.

FT8 transmits and receives only the most essential things needed to make an amateur radio contact (QSO): exchange of callsigns, readability report, signal strength report, and "best regards" ("73"). Because only this information can be sent, FT8 is not a "conversation mode". FT8 transmits this minimum information in a semi-automated manner in its own time frame. Therefore FT8 is not a "keyboard-to-keyboard" mode (real-time chat).

JS8 is a variant of FT8 that allows operators to send more information and talk to each other. JS8 was created to apply the fundamentals of FT8 to sending actual messages (rather than only the absolute minimum QSO information in FT8).

Both FT8 and JS8 rely heavily on an accurate computer clock, as the modes send/receive information in a recurring, automated 15-second transmit/receive cycle. Transmissions take place in intervals of 12.6 seconds (within the 15-second transmit cycle window) until a complete message is sent. FT8 uses GFSK with 8 modulations, contains forward error correction (FEC) and has an effective data rate of 5 words per minute. FT8 transmissions can be decoded with S/N down to -21 dB (very weak signal).

FT8 was developed by Joe Taylor (K1JT) and Steve Franke (K9AN). It is one of the modes that are part of the open-source weak signal software package, WSJT-X.

#### <font color="blue"><ins>Typical FT8 QSO</ins></font>

A typical FT8 QSO:

| Characters transmitted / received | Interpretation |
|---|---|
| "CQ PE1LUP JO21" | CQ call from radio operator "PE1LUP" together with his Maidenhead grid square locator code |
| "PE1LUP PA3FTP JO21" | Radio operator "PA3FTP" answers with his callsign and grid square locator |
| "PA3FTP PE1LUP -10" | PE1LUP responds with a signal report (in the form of a WSJT-X measurement rather than a more conventional, though more subjective, RST measurement) |
| "PE1LUP PA3FTP R-12" | PA3FTP confirms signal report and responds with his own report |
| "PA3FTP PE1LUP RRR" | PA3FTP tells PE1LUP: "Received report" (This can also be abbreviated to "RR73", indicating "Report Received 73", which would be a completed QSO) |
| "PE1LUP PA3FTP 73" | PA3FTP says "Best regards" ("73") |
| "PA3FTP PE1LUP 73" | PE1LUP says "Best regards" ("73") (not used if PA3FTP's third transmission was "RR73") |

Operators send one message within a 15-second time frame and then wait another 15 seconds to receive incoming responses (then transmit again and wait again, in a cycle that exchanges messages until the conversation is complete). Therefore the full exchange (QSO) above would take approximately 105 seconds.

#### <font color="blue"><ins>Frequencies</ins></font>
FT8: common frequencies for FT8 and JS8Call in kHz:

| Band | FT8 | JS8Call | IARU region |
|---|---|---|---|
| 160 m | 1840 | 1842 | All |
| 80 m | 3573 | 3578 | All |
| 60 m | *5357* | | |
| 40 m | *7056* | | Region 1 |
|    | *7071* | | |
| | 7074 | 7078 | All |
| 30 m | *10132* | 10130 | Region 1 |
| | *10133* | | |
| | 10136 | | All |
| 20 m | *14071* | | |
| | 14074 | 14078 | All |
| | *14090* | | Region 1 |
| 17 m | 18100 | 18104 | All |
| 15 m | 21074 | 21078 | All |
| | *21091* | | |
| 12 m | 24915 | 24922 | All |
| 10 m | 28074 | 28078 | All |
| 6 m | *50310* | | |
| | 50313 | 50318 | All |
| | 50323 | *50328* | All, international DX |
| 4 m | 70100 | | Region 1 |
| | *70154* | | Countries without access to 70.100 |
| 2 m | 144174 | | All |
| 1.25 M | *222065* | | |
| 70 cm | *432065* |  | |
| | *432174* | | |
| 23 cm | *1296174* | | |

*Italic* cells are commonly used frequencies not included in the standard programme settings of JS8Call or WSJT-X (FT8). Frequencies for JS8Call and FT8 are user-configurable.

#### <font color="blue"><ins>Controversy</ins></font>

Since FT8 automatically sends and receives only the absolute minimum information needed to satisfy what officially counts as an amateur radio contact (QSO), FT8 has been criticised by some amateur radio enthusiasts as a means for radio amateurs to "cheat" their way to victory in certain contests and prize categories. Other amateur radio operators announce the mode as a boon for the hobby of amateur radio in times when the solar cycle is at minimum and when conditions for radio propagation are poor.

#### <font color="blue"><ins>Hobbyist software</ins></font>
FT8:

* Websites: **[WSJT-X (multi-platform)](https://wsjt.sourceforge.io/index.html)** and **[JTDX (multi-platform)](https://sourceforge.net/projects/jtdx/)**

#### <font color="blue"><ins>Additional link</ins></font>
FT8:
* Website: **[Short FT8 description](https://w5fc.org/2017/07/15/new-digital-mode-from-k1jt-ft8/)**

### <font color="green"><ins>HF Fax</ins></font>
HF Fax is similar to the RTTY mode with a shift of 800 Hz, white at 2300 Hz and black at 1500 Hz, except that it involves RX/TX of images in black-and-white or greyscale.

There are two types of fax: "black-and-white" or with 8 grey levels, but only the first appears to be in use. In "black-and-white" fax, two AF frequencies are transmitted: one with low frequency (1500 Hz), the other with high frequency (2300 Hz), the first tone corresponds to black and the second to white.

Listening is on USB, the user must set the receiver frequency 1900 Hz ((1500+2300)/2) below the transmitter frequency (for example BRACKNELL METEO on 2616.6 kHz). In greyscale, frequencies are between 1500 and 2300 Hz.

The scan speed or number of lines produced per minute (lpm) can be 60, 90 or 120. In Western Europe the speed is 120 lpm. In Eastern Europe the speeds are 60 and 90 lpm.

Radio amateurs use an IOC of 288 and a speed of 120 lpm. Images are transmitted in "black-and-white" or in greyscale.

#### <font color="blue"><ins>Hobbyist software</ins></font>
HF FAX:
* Website: **[MultiPSK](http://f6cte.free.fr/index_anglais.htm)**

#### <font color="blue"><ins>Frequencies</ins></font>
HF FAX, USB in kHz:
- 2618.5, 3289.5, 4610 or 8040: Bracknell Meteo (meteorological broadcasts)
- 2374, 3652, 4307 or 6446: RN London (meteorological broadcasts)
- 3730-3740
- 3750 (for U.S. Hams)
- 3855, 7880 or 13882.5: Hamburg Meteo (meteorological broadcasts)
- 7035-7045
- 7150 (for U.S. Hams)
- 8503 (NMG New Orleans, LA)
- 14230
- 21200 (for U.S. Hams)
- 21340
- 28680
- 50550
- 137100 (APT faxes transmitted by NOAA satellite no. 19)
- 137620 (APT faxes transmitted by NOAA satellite no. 15)
- 137912.5 (APT faxes transmitted by NOAA satellite no. 18)
- 144700

### <font color="green"><ins>JS8, JS8Call</ins></font>

JS8Call (JS8) is an amateur radio QSO communication mode based on FT8. It is popular among amateur radio operators due to its ability to send and receive messages despite challenging propagation conditions, high-noise environments, low power operations (QRP) or even compromised antennas.

JS8Call changes FT8 into a "chat" mode, allowing stations to send longer "keyboard-to-keyboard" messages. JS8Call can be seen as a radio broadcast form of 'email' with a very weak signal (although it is not email), where operators can check their inbox and reply later. Messages can also be sent to be relayed via other operators to reach a receiving operator. JS8Call conversations can also be conducted in real time.

JS8Call was created by Jordan Sherer (KN4CRD) and was first released on 4 January 2019.

#### <font color="blue"><ins>Frequencies</ins></font>
JS8, JS8Call in kHz:

| Band | FT8 | JS8Call | IARU region |
|---|---|---|---|
| 160 m | 1840 | 1842 | All |
| 80 m | 3573 | 3578 | All |
| 60 m | *5357* | | |
| 40 m | *7056* | | Region 1 |
|    | *7071* | | |
| | 7074 | 7078 | All |
| 30 m | *10132* | 10130 | Region 1 |
| | *10133* | | |
| | 10136 | | All |
| 20 m | *14071* | | |
| | 14074 | 14078 | All |
| | *14090* | | Region 1 |
| 17 m | 18100 | 18104 | All |
| 15 m | 21074 | 21078 | All |
| | *21091* | | |
| 12 m | 24915 | 24922 | All |
| 11 m | | 27245 | All |
| 10 m | 28074 | 28078 | All |
| 6 m | *50310* | | |
| | 50313 | 50318 | All |
| | 50323 | *50328* | All, international DX |
| 4 m | 70100 | | Region 1 |
| | *70154* | | Countries without access to 70.100 |
| 2 m | 144174 | | All |
| 1.25 M | *222065* | | |
| 70 cm | *432065* |  | |

*Italic* cells are commonly used frequencies not included in the standard programme settings of JS8Call or WSJT-X (FT8). Frequencies for JS8Call and FT8 are user-configurable. "Conventions may change over time or by user preference."

#### <font color="blue"><ins>Hobbyist software</ins></font>
JS8, JS8Call:

* Website: **[JS8Call (multi-platform)](http://files.js8call.com/latest.html)**

#### <font color="blue"><ins>Additional links</ins></font>
JS8, JS8Call:

* Websites: **[JS8Call website](http://js8call.com)** and **[JS8Call groups.io group](https://groups.io/g/js8call)**



### <font color="green"><ins>LENTUS</ins></font>
Lentus is an extremely slow (QRP) mode developed by Patrick Lindecker F6CTE used to transmit very low power QRPs. Each transmission of 43 characters (75 bits) takes approximately 5 minutes to transmit over 32 possible tones in a narrow bandwidth of 25 Hz.
Lentus has an extremely high sensitivity rating (down to a minimum S/N ratio of -34 dB, with first decoding at -36.5 dB, able to decode even below the noise floor). Lentus is intended for use on LF, MF and HF (up to 14 MHz).

#### <font color="blue"><ins>Hobbyist software</ins></font>
Lentus:
* Website: **[MultiPSK](http://f6cte.free.fr/index_anglais.htm)**

#### <font color="blue"><ins>Frequencies</ins></font>
Lentus in kHz:
- 136.3 (QSO or beacon)
- 1837 (QSO or beacon)
- 3589 (QSO or beacon)
- 7037.5 (QSO or beacon)
- 10138.7 (QSO or beacon)
- 14074 (QSO or beacon)
- 14095.6 (QSO or beacon)

#### <font color="blue"><ins>Video examples</ins></font>
Lentus:
* Websites: **[Lentus received from N8ABY on 30 metres by N2BEW](https://www.youtube.com/watch?v=i6dPG1__jZc)** and **[LENTUS MODE](https://www.sigidwiki.com/images/1/1d/LENTUS_easy_with_Multipsk.pdf)**

#### <font color="blue"><ins>Additional links</ins></font>
Lentus:
* Website: **[Utility Planet Lentus](http://www.ominous-valve.com/lentus.html)**

### <font color="green"><ins>MT63</ins></font>
MT63 works with 64 carrier frequencies that are phase modulated. This mode is not susceptible to fading and is considered a very robust mode due to its interleaving. The minimum signal-to-noise ratio is at 10 baud -5 dB.

The MT63 specifications require an accuracy of +/- 0.01% of the received frequency. However, Windows MT63 software accepts +/-0.5% offset and many sound cards have an offset of up to 0.7% or even more for the nominal sampling frequency of 8000 samples/second, making decoding of MT63 problematic (as the offset of RX and TX can accumulate to 1.4%). To correct this situation, Multipsk automatically determines the offset between receive and transmit up to 1.5% (only with good signals).

#### <font color="blue"><ins>Hobbyist software</ins></font>
MT63:
* Websites: **[MultiPSK](http://f6cte.free.fr/index_anglais.htm)**, **[FLdigi](https://sourceforge.net/projects/fldigi/files/)** and **[MT63 Terminal](https://antoninoporcino.xoom.it/MT63/index.htm)**

#### <font color="blue"><ins>Additional links</ins></font>
MT63:
* Websites: **[WB8NUT Digital Modes](http://wb8nut.com/digital/)** and **[MT63 Wikipedia](https://en.wikipedia.org/wiki/MT63)**

#### <font color="blue"><ins>Frequencies</ins></font>
MT63 in kHz:
- 1822
- 1838
- 3580
- 3590
- 3635
- 7035
- 7037
- 10140
- 10145
- 14106
- 14109
- 14114
- 18100
- 18105
- 21130
- 24925
- 28130

### <font color="green"><ins>PACKET</ins></font>
PACKET, also known as FSK300, AX25 or X25, is a packet-based protocol derived from the AX.25 and HDLC computer network protocols. Packet radio is a synchronous system in which data is transmitted in ASCII character packets.

There are a number of variants that exist. For HF there is PACKET 300 and for VHF there are a number of variants, although the most common are PACKET 1200 and PACKET 9600.

#### <font color="blue"><ins>History</ins></font>

Teletype machines were first developed in the 1930s. Once they became available on the surplus market, hams began using them on the air.
It was not difficult to get started. You only needed to add a simple modem called a "terminal unit".
It was not an efficient way to transmit text. First you would turn on the transmitter and it would broadcast a 100% duty cycle carrier. The frequency shifts by 170 Hz in a certain pattern for each key pressed. There was no error detection, so you would often see unreadable messages.
It used a 5-bit code, commonly known as "baudot". This allows only 32 different combinations, not enough for all letters and digits.

In 1978, Canadian radio amateurs began experimenting with a completely different method of transmitting data over the air. Instead of keeping the transmitter on and off, it was transmitted in a short packet.

Each transmission contains:
- Source address (e.g. ham callsign)
- Destination address
- Optional repeater addresses
- Control/protocol bytes
- Information section
- Error check (FCS, CRC)

This new approach offers many advantages:
- Instead of tying up a radio channel with one person typing one character at a time, a message can be sent in a short time.
- Each packet contains information about where it came from and where it should go.
- This allows many people to share one frequency.
- Error detection gave confidence that the data was not corrupted.
- The TNC sends acknowledgements when data is correctly received and retries when it does not get through the first time.
- Data was not limited to printable characters. You can send files such as JPEG images.

#### <font color="blue"><ins>Packet-300</ins></font>

PACKET-300 uses FSK modulation with a shift of 200 Hz and a symbol rate of 300 Bd (rarely seen at 600 Bd). On amateur frequencies above 30 MHz, higher speeds such as 1200 and 9600 baud are typically used.

#### <font color="blue"><ins>Packet-1200</ins></font>

PACKET-1200 uses FSK modulation with a shift of 1000 Hz and a symbol rate of 1200 Bd. Several variations of PACKET-1200 exist, including a PSK-based satellite version. PACKET-1200 can be seen in the VHF and UHF bands with indirect FM modulation. Bandwidth is 12 kHz.

#### <font color="blue"><ins>Packet-2400 and Packet-4800</ins></font>

These are just some variants of PACKET that operate at 2400 Bd and 4800 Bd.

#### <font color="blue"><ins>Packet-9600</ins></font>

PACKET-9600 uses GFSK with a symbol rate of 4800 Hz and 9600 Bd. PACKET-9600 can be seen in the UHF-SHF band. Bandwidth is 15 kHz.

#### <font color="blue"><ins>Frequencies</ins></font>
Packet in USB, kHz:
- 3590
- 3590 to 3600 (QSO in FSK 300 baud)
- 7042
- 10147.5 (FSK 110, PSK31, 63 and 250)
- 10150 (APRS in FSK 300 baud)
- 14075 (FSK 110, PSK31, 63 and 250)
- 14090 to 14099 (QSO in FSK 300 baud)
- 14101 to 14112 (FSK 300 baud)
- 14105 (network 105 ARES, emergency traffic standby packetnet, FSK 300 baud)
- 18102 (APRS in FSK 300 baud)
- 21100 to 21120 (QSO in FSK 300 baud)
- 21113 (APRS in FSK 300 baud)
- 28120 to 28150 (QSO in FSK 300 baud)
- 29250 (FSK 1200 baud APRS)
- 144390 (APRS in FSK 1200 baud on the North American continent)
- 144620 (FSK 110, PSK31, 63 and 250)
- 144800 (APRS in FSK 1200 baud)
- 430825 (9600 baud QRG UHF Europe in FM)

#### <font color="blue"><ins>Hobbyist software</ins></font>
Packet:
* Websites: **[Dire Wolf](https://github.com/wb2osz/direwolf)**, **[MixW](http://mixw.net)**, **[MultiMode (for Macs)](http://www.blackcatsystems.com/software/multimode.html)**, **[MultiPSK](http://f6cte.free.fr/index_anglais.htm)**, **[Sorcerer](http://www.kd0cq.com/2013/07/sorcerer-decoder-download/)**, **[TrueTTY](http://www.dxsoft.com/en/products/truetty/)** and **[SDRangel](https://github.com/f4exb/sdrangel/blob/master/plugins/channelrx/demodpacket/readme.md)**

#### <font color="blue"><ins>Additional links</ins></font>
Packet:
* Websites: **[WAVECOM Database: PACKET 300](http://www.wavecom.ch/content/ext/DecoderOnlineHelp/default.htm#!worddocuments/packet300.htm)**, **[WAVECOM Database: PACKET 1200](http://www.wavecom.ch/content/ext/DecoderOnlineHelp/default.htm#!worddocuments/packet1200.htm)**, **[WAVECOM Database: PACKET 9600](http://www.wavecom.ch/content/ext/DecoderOnlineHelp/default.htm#!worddocuments/packet9600.htm)** and **[shoc Database: PACKET 300](https://cartoonman.github.io/Shoc/packet300.htm)**

### <font color="green"><ins>PACTOR 1</ins></font>
PACTOR-I is a digital data protocol that combines elements of PACKET and AMTOR ARQ.

PACTOR-I is used by many groups, including Sailmail for sailors to send and receive emails. It is also used by Ham Radio operators, government and diplomatic agencies and even NGOs. PACTOR-I is also used as a Selcall protocol to establish connections with other PACTOR modems.
PACTOR II, III and IV modems all use PACTOR-I for selection.

PACTOR I has 200 baud rate, Huffman compression technique, uses 2 FSK tones with a shift of 200 Hz and true binary data transfer. Created by Ulrich Strate (DF4KV) and Hans-Peter Helfert (DL6MAA) in 1990.

FSP = Free Signal Protocol. The basic idea behind the "Free-signal" (FS) is that the host (e.g. a maritime coastal station) informs all clients that there is currently no connection in operation, i.e. it is free, by a frequently repeated special signal. Clients that hear this signal are allowed to call.

Because PACTOR hardware modems are relatively expensive, the WINMOR and ARDOP software modes were developed after PACTOR to give amateur radio operators a means to send free email via radio. VARA, which is a shareware mode, was possibly developed as a cheaper competitor to PACTOR III with comparable transmission speeds, although PACTOR reliability is reportedly better than VARA.

Winlink (formerly RMS Express) is a global radio messaging service for amateur radios that can forward messages sent via radio to conventional email servers. The Winlink radio messaging software client is called Winlink Express. Winlink Express is compatible with various PACTOR hardware modems, as well as with WINMOR, ARDOP and VARA.

#### <font color="blue"><ins>Hobbyist software</ins></font>
Pactor 1:
* Websites: **[MixW](http://mixw.net)**, **[MultiPSK](http://f6cte.free.fr/index_anglais.htm)**, **[SeaTTY Note: only Pactor 1 FEC](http://www.dxsoft.com/en/products/seatty/)** and **[Sorcerer](http://www.kd0cq.com/2013/07/sorcerer-decoder-download/)**


| Item | Description |
|---|---|
| Created by | Ulrich Strate (DF4KV) and Hans-Peter Helfert (DL6MAA) in 1990 |
| Baud rate | 100 or 200 (initially 200 baud) automatically selected according to propagation conditions |
| Speed | between 0 and approximately 260 wpm depending on number of repetitions, propagation conditions and selection or not of a compressed mode (Huffman) |
| Modulation | FSK two tones («mark» and «space») with a shift between tones of 200 Hz. Polarities are reversed for each new information frame |
| Receive mode | LSB or USB |
| Character set | ASCII characters + ANSI extended characters in "8 bits" or only ASCII characters with Huffman compression |
| Pulse | rectangular |
| Bandwidth | 600 Hz |
| Demodulation | non-coherent |
| Synchronisation | automatic using the signal |
| Error correction | no |
| Convolutional code | no |
| Interleaving | no |
| Pmean/Ppeak | 1 |
| Minimum S/N at 100 baud | around -4 dB |

#### <font color="blue"><ins>Frequencies</ins></font>
Pactor 1:
- 3590 (around this frequency)
- 7041 (around this frequency)
- 14111 (around this frequency)

### <font color="green"><ins>PACTOR II</ins></font>
PACTOR II is a further development of PACTOR I. It is up to 8 times faster than PACTOR I.
PACTOR is used by many groups, including Sailmail for sailors to send and receive emails. It is also used by Ham Radio operators, government and diplomatic agencies and even NGOs.
PACTOR II has a bandwidth of 450 Hz. This is a proprietary standard developed by SCS GmbH & Co. KG, Hanau, Germany.
Uses 2 DPSK tones. PACTOR I SELCALL is used when establishing an initial connection between two operators.

Because PACTOR hardware modems are relatively expensive, the WINMOR and ARDOP software modes were developed after PACTOR to give amateur radio operators a means to send free email via radio.

#### <font color="blue"><ins>Hobbyist software</ins></font>
Pactor II:
* Websites: **[MixW](http://mixw.net)** and **[Sorcerer](http://www.kd0cq.com/2013/07/sorcerer-decoder-download/)**

#### <font color="blue"><ins>Additional links</ins></font>
Pactor II:
* Websites: **[ARRL PACTOR II](http://www.arrl.org/pactor-ii)**, **[KKL Radio](http://www.kklradio.com)**, **[shoc Database: PACTOR II](https://cartoonman.github.io/Shoc/pactorii.htm)**, **[shoc Database: PACTOR II FEC](https://cartoonman.github.io/Shoc/pactoriifec.htm)** and **[SailMail](https://sailmail.com)**

### <font color="green"><ins>PACTOR III</ins></font>
PACTOR III introduces 6 speed levels that provide higher throughput and improved robustness compared to PACTOR I and II. PACTOR III is on average 3.5 times faster than PACTOR II. Under optimal conditions, PACTOR III becomes more than 5 times faster.
PACTOR III has a maximum bandwidth of 2400 Hz. This is a proprietary standard developed by SCS GmbH & Co. KG, Hanau, Germany.
Pactor III has 6 speed modes, consisting of 2, 6, 14, 16 and 18 tone modulations, with each tone 120 Hz apart.
During a standard transmission connection between two operators, PACTOR III modems will send a PACTOR I SELCALL to determine the optimal mode and speed between the two operators.

| Speed level | Number of tones | Code | Modulation type |
|---|---|---|---|
| 1 | 2 | 1/2 | DBPSK |
| 2 | 6 | 1/2 | DBPSK |
| 3 | 14 | 1/2 | DBPSK |
| 4 | 14 | 1/2 | DQPSK |
| 5 | 16 | 3/4 | DQPSK |
| 6 | 18 | 8/9 | DQPSK |

#### <font color="blue"><ins>Frequencies</ins></font>
Pactor III in kHz:
- 14100.6-14121.7
- 21111.2

#### <font color="blue"><ins>Hobbyist software</ins></font>
Pactor III:
* Website: **[Sorcerer](http://www.kd0cq.com/2013/07/sorcerer-decoder-download/)**

#### <font color="blue"><ins>Additional links</ins></font>
Pactor III:
* Websites: **[ARRL PACTOR III](http://www.arrl.org/pactor-iii)**, **[KKL Radio](http://www.kklradio.com)**, **[shoc Database: PACTOR III](https://cartoonman.github.io/Shoc/pactoriii.htm)**, **[WAVECOM Database: PACTOR III](http://www.wavecom.ch/content/ext/DecoderOnlineHelp/default.htm#!worddocuments/pactoriii.htm)**, **[SCS PACTOR](https://www.scs-ptc.com)** and **[SailMail](https://sailmail.com)**

### <font color="green"><ins>PACTOR IV</ins></font>
PACTOR IV is the latest version of the PACTOR series, derived from PACTOR I-III. It is 1.5x-3x faster than PACTOR III and has 10 speed levels. This is a proprietary standard developed by SCS GmbH & Co. KG, Hanau, Germany. This mode is used exclusively in the P4dragon series HF data modems from SCS. The P4dragon series modems are all backwards compatible with PACTOR I-III and use, like PACTOR II and III, PACTOR I SELCALL to establish connections with other modems.

The 10 speed modes of PACTOR IV:

| Speed level | Modulation | Gross ratio | BPS |
|---|---|---|---|
| 1 | 2 tone chirp | 113 | 46.9 |
| 2 | DQPSK | 225 | 85.32 |
| 3 | DQPSK | 225 | 147.2 |
| 4 | DQPSK | 450 | 300.8 |
| 5 | BPSK | 1800 | 433.1 |
| 6 | BPSK | 1800 | 1096.5 |
| 7 | QPSK | 3600 | 2199.5 |
| 8 | 8-PSK | 5400 | 3304.5 |
| 9 | 16-QAM | 7200 | 4407.5 |
| 10 | 32-QAM | 9000 | 5512.5 |

#### <font color="blue"><ins>Video examples</ins></font>
Pactor IV:
* Websites: **[9049.5 kHz PACTOR IV modem](https://www.youtube.com/watch?v=hgm8zJn8WJ0)**, **[P4dragon Modem Transmitting](https://www.youtube.com/watch?v=o2xCa20AQyc)** and **[The voice of Dragon? A sound of PACTOR-IV ARQ mode](https://www.youtube.com/watch?v=zzrjQsq4FpE)**

#### <font color="blue"><ins>Additional links</ins></font>
Pactor IV:
* Websites: **[PACTOR IV Modem SCS Page](https://www.scs-ptc.com)**, **[PACTOR IV 2-tone Chirp](http://www.ominous-valve.com/pactor-iv.html)**


### <font color="green"><ins>PSK10</ins></font>
The PSK10 mode is designed to ensure communication with a weak signal-to-noise ratio down to -17.5 dB with less than 2% errors. The speed is 18 wpm. This mode is very sensitive to ionospheric Doppler modulation.

| Item | Description |
|---|---|
| Created by | Patrick Lindecker F6CTE (2001) |
| Baud rate | 10 |
| Speed | 18 wpm |
| Modulation | DBPSK |
| Receive mode | LSB and USB |
| Character set | 56 "Varicode" characters A..Z 0..9, CR, SPACE . , " : - = + ? $ ' ( ) ! / @ & # * with an error reset character and an idle character (represented by ">"). Lowercase characters are converted to uppercase and special characters such as "é" are converted to standard uppercase (in the example: "E") |
| Pulse shape | rectangular but the transition between 2 consecutive different bits is done by a decreasing sine and then by an increasing sine (each for a quarter period) |
| Bandwidth | around 40 Hz |
| Demodulation | coherent |
| Synchronisation | automatic using the signal |
| Error correction | no |
| Convolutional code | no |
| Interleaving | no |
| Repetition | no |
| Drift tolerance | 40 Hz/min (depending on signal-to-noise ratio) |
| Pmean/Ppeak | 0.86 |
| Minimum S/N | -17.5 dB |

#### <font color="blue"><ins>Hobbyist software</ins></font>
PSK10:
* Website: **[MultiPSK](http://f6cte.free.fr/index_anglais.htm)**

#### <font color="blue"><ins>Recommended frequencies</ins></font>
PSK10:

These modes (except PSK220F) such as PSK10 and PSKFEC31, PSK63F+DIGISSTV, PSKAM10/31/50 are QRP transmissions and are very rarely used. It is suggested to focus calls on the following frequencies and times:
* 14075 kHz USB (AF around 1000 Hz) at 17:00 UTC,
* 10148 kHz USB (AF around 1000 Hz) at 22:00 UTC.
* 144620 kHz USB (AF around 1000 Hz) at 20:00 UTC.

### <font color="green"><ins>PSK220F</ins></font>

The PSK220F mode is a PSK63F mode with a speed of 220 baud. It enables a very high transmission speed. The minimum signal-to-noise ratio is approximately -7 dB.

| Item | Description |
|---|---|
| Created by | Patrick Lindecker F6CTE (2005) |
| Baud rate | 220.5 |
| Speed | 140 wpm in uppercase and 200 wpm in lowercase (average) |
| Modulation | DBPSK |
| Receive mode | LSB or USB |
| Character set | ASCII characters + almost all extended ANSI characters + an error reset character ("Varicode" characters) |
| Pulse shape | raised cosine |
| Bandwidth | approximately 430 Hz (max -30 dB) |
| Synchronisation | automatic using the signal |
| Error correction | no |
| Convolutional code | R(Rate)=1/2, K(Constraint length)=7 with Viterbi type decoder, both encoder outputs are transmitted sequentially |
| Drift tolerance | 2.5 Hz/sec (+/- depending on signal-to-noise ratio) |
| Pmean/Ppeak | 0.79 |
| Minimum S/N | -7 dB in text and -5 dB in DIGISSTV |
| Interleaving | no |
| Note | this mode is simply PSK63F (by Nino Porcino IZ8BLY) implemented at 220.5 baud |

#### <font color="blue"><ins>Hobbyist software</ins></font>
PSK220F:
* Website: **[MultiPSK](http://f6cte.free.fr/index_anglais.htm)**

#### <font color="blue"><ins>Frequencies</ins></font>
PSK220F:

* 10148 kHz (AF around 1000 Hz), at 22:00 UTC with little traffic,
* 14075 kHz (AF around 1000 Hz), at 17:00 UTC if little traffic,
* 144620 kHz (AF around 1000 Hz), at 20:00 UTC with little traffic.

### <font color="green"><ins>PSKAM</ins></font>

The PSKAM10 mode is PSKAM transmitted at 10 baud. The speed is approximately 6 wpm. This mode only allows low-speed chatting, but down to very weak S/N (-19.5 dB)... it can be used in LF transmissions. The bandwidth is approximately 40 Hz.

The PSKAM31 mode is PSKAM transmitted at 31.25 baud. The speed is approximately 20 wpm. This mode allows chatting down to a weak S/N (-14 dB). The bandwidth is approximately 110 Hz.

The interleaved PSKAM50 mode is derived from the PSK10 mode for modulation and from AMTOR FEC for character repetition (time diversity). The speed is 50 baud, but each character is transmitted twice with an interval of five characters (example: A X B Y C A D B…). The speed is approximately 31 wpm. This mode makes it possible to significantly reduce the number of errors due to HF radio conditions (without sending random characters). The bandwidth is approximately 180 Hz. The minimum S/N is -11.5 dB (for a PC at 166 MHz or higher).

| Item | Description |
|---|---|
| Created by | Patrick Lindecker F6CTE (2002/2003) |
| Baud rate | 10 (PSKAM10), 31.25 (PSKAM31), 50 (PSKAM50) |
| Speed | 6 wpm (PSKAM10), 20 wpm (PSKAM31), 31 wpm (PSKAM50) |
| Modulation | DBPSK |
| Receive mode | LSB or USB |
| Character set | 56 «fixed length» characters A..Z 0..9, CR, SPACE . , : - = + ? $ ' ( ) ! / @ % with an error reset character and an idle character (represented by '>'). Lowercase characters are converted to uppercase and special characters such as «é» are converted to standard uppercase (in the example: «E») |
| Pulse shape | for PSKAM10 and PSKAM50: rectangular but the transition between 2 consecutive different bits is done by a decreasing sine and then by an increasing sine (each for a quarter period); for PSKAM31: raised cosine |
| Bandwidth | approximately 50 Hz (PSKAM10), 80 Hz (PSKAM31), 260 Hz (PSKAM50) |
| Demodulation | coherent |
| Synchronisation | automatic using the signal |
| Error correction | no |
| Convolutional code | no |
| Interleaving | no |
| Repetition | each character is repeated 5 positions later (0.8 s in PSKAM50, 1.28 s in PSKAM31 or 4 s in PSKAM10 between 2 transmissions of the same character) (example: A X B Y C A D B…). This time diversity allows correction of an erroneous character |
| Automatic frequency correction | from +/-3 Hz to +/- 10 Hz depending on signal level |
| Drift tolerance | 60 Hz/min for PSKAM31 and PSKAM50 and 40 Hz/min for PSKAM10 (depending on signal-to-noise ratio) |
| Pmean/Ppeak | 0.86 for PSKAM10 and 50, 0.79 for PSKAM31 |
| Minimum S/N | -11.5 dB for PSKAM50, -14 dB for PSKAM31 and -19.5 dB for PSKAM10 |

#### <font color="blue"><ins>Hobbyist software</ins></font>
PSKAM:
* Website: **[MultiPSK](http://f6cte.free.fr/index_anglais.htm)**

#### <font color="blue"><ins>Frequencies</ins></font>
PSKAM 10/31/50:

The modes (except PSK220F) such as PSKAM10/31/50 and PSK10, PSKFEC31, PSK63F+DIGISSTV are QRP transmissions and are very rarely used. It is suggested to focus calls on the following frequencies and times:
* 10148 kHz USB (AF around 1000 Hz) at 22:00 UTC.
* 14075 kHz USB (AF around 1000 Hz) at 17:00 UTC,
* 144620 kHz USB (AF around 1000 Hz) at 20:00 UTC.

### <font color="green"><ins>PSKFEC31</ins></font>

In the software MULTIPSK by Patrick F6CTE, an experimental new mode called PSKFEC31 is introduced. This mode is derived from the PSK10 mode for the character set and from PSK31 for the speed (31.25 baud). Each bit (and not each character as in PSKAM) is transmitted twice with an interval of 13 bits between the two transmissions of the bit. The speed is approximately 28 wpm. This mode makes it possible to minimise the number of errors due to HF propagation conditions. The bandwidth is approximately 110 Hz. The minimum S/N is -14.5 dB (for a PC at 166 MHz or higher).

| Item | Description |
|---|---|
| Created by | Patrick Lindecker F6CTE (06/2003) |
| Baud rate | 31.25 |
| Speed | 28 wpm |
| Modulation | DBPSK |
| Receive mode | LSB or USB |
| Character set | 56 "Varicode" characters A..Z 0..9, CR, SPACE . , " : - = + ? $ ' ( ) ! / @ & # * with an error reset character and an idle character (represented by ">"). Lowercase characters are converted to uppercase and special characters such as "é" are converted to standard uppercase (in the example: "E") |
| Pulse shape | rectangular but the transition between 2 consecutive different bits is done by a decreasing sine and then by an increasing sine (each for one quarter period) |
| Bandwidth | around 160 Hz |
| Demodulation | coherent |
| Synchronisation | automatic using the signal |
| Error correction | no |
| Convolutional code | no |
| Interleaving | no |
| Repetition | each bit is repeated 13 positions later (thus 0.42 s between 2 transmissions of the same bit). This time diversity allows correction of an erroneous bit. Synchronisation is straightforward |
| Automatic frequency correction | from +/-3 Hz to +/- 10 Hz depending on signal level |
| Drift tolerance | 60 Hz/min for PSKFEC31 (depending on signal-to-noise ratio) |
| Pmean/Ppeak | 0.88 |
| Minimum S/N | -14.5 dB |

Thanks to the FEC process, this mode makes it possible to significantly reduce the number of errors due to HF propagation conditions compared to BPSK31.

#### <font color="blue"><ins>Hobbyist software</ins></font>
PSKFEC31:

- Website: **[MultiPSK](http://f6cte.free.fr/index_anglais.htm)**

#### <font color="blue"><ins>Frequencies</ins></font>
PSKFEC31:

These modes (except PSK220F) such as PSKFEC31 and PSK10, PSKFEC31, PSK63F+DIGISSTV, PSKAM10/31/50 are QRP transmissions and are very rarely used. It is suggested to concentrate calls on the following frequencies and times:
* 10148 kHz USB (AF around 1000 Hz) at 22:00 UTC.
* 14075 kHz USB (AF around 1000 Hz) at 17:00 UTC,
* 144620 kHz USB (AF around 1000 Hz) at 20:00 UTC.

### <font color="green"><ins>RTTY</ins></font>

RTTY (also known as Baudot or ITA2) uses the Baudot 5-bit alphabet with FSK to transmit text messages over shortwave. This mode is gradually dying out in favour of more robust modes such as PSK31 in the amateur service. Uses the ITA-2 alphabet (commonly known as Baudot, derived from the Murray code). Apart from occasional amateur use, the only other known user is the Deutscher Wetterdienst (German Meteorological Service).

The most common standard RTTY mode in amateur radio is 170 Hz shift with 45.45 Bd.

| Mode | Baud rate |
|---|---|
| RTTY 85 Hz shift | 45.45 Bd, 50 Bd, 75 Bd, 100 Bd |
| RTTY 170 Hz shift | 45.45 Bd, 50 Bd, 75 Bd, 100 Bd |
| RTTY 450 Hz shift | 45.45 Bd, 50 Bd, 75 Bd, 100 Bd |
| RTTY 850 Hz Shift | 45.45 Bd, 50 Bd, 75 Bd, 100 Bd |

| Item | Description |
|---|---|
| Baud rate: | 45. A character consists of a "start" bit (1 "space"), 5 bits and a "stop" bit (1.5 "mark") |
| Speed: | 60 words per minute |
| Modulation: | FSK two tones («mark» and «space», "mark" high) with a shift between tones of 23 Hz, 170 Hz (standard shift), 200 Hz or 850 Hz |
| Receive mode: | USB |
| Character set: | ITA2 (32 letters and 32 digits) without error correction character (fixed length characters). Lowercase characters are converted to uppercase and special characters such as «é» converted to standard uppercase (in the example: «E») |
| Pulse shape: | rectangular |
| Bandwidth: | for the standard shift of 170 Hz, approximately 600 Hz (due to rectangular shape) |
| Demodulation: | non-coherent |
| Synchronisation: | on «start» |
| Error correction: | no |
| Convolutional code: | no |
| Interleaving: | no |
| Pmean/Ppeak: | 1 |
| Minimum S/N: | -5.5 dB. In 50 baud the speed is 67 wpm and the minimum S/N is -5 dB. In 75 baud the speed is 100 wpm and the minimum S/N is -3.5 dB. The 850 Hz shift mode is intended for old teleprinters |
| Note: | For radio amateurs the transmission speed is 45 baud with a shift of 170 Hz and less commonly 50 baud with a shift of 425 Hz |

#### <font color="blue"><ins>Frequency</ins></font>
RTTY commercial and maritime:

* Websites: **[Deutscher Wetterdienst (German Weather Service) schedule (PDF)](http://www.ominous-valve.com/dwdschedule.pdf)** and **[Station KPH frequencies and schedule](https://www.radiomarine.org/mrhs-operations)**

RTTY: amateur frequencies in kHz:

- 80 metres: 3570-3600
- 60 metres: 5330.5, 5346.5, 5357.0, 5371.5 and 5403.5
- 40 metres: 7040, 7080-7125
- 30 metres: 10130-10140
- 20 metres: 14070-14095
- 17 metres: 18100-18105
- 15 metres: 21070-21110
- 10 metres: 28070-28150
- 6 metres: 50300-50600

#### <font color="blue"><ins>Hobbyist software</ins></font>
RTTY:

* Websites: **[CocoaModem (for Macs)](http://www.w7ay.net/site/Applications/cocoaModem/index.html)**, **[FLdigi](https://sourceforge.net/projects/fldigi/files/)**, **[JVComm32](http://www.jvcomm.de/index_e.html)**, **[MixW](http://mixw.net)**, **[Mscan](http://downloads.fyxm.net/Mscan-SSTV-101684.html)**, **[MultiMode (for Macs)](http://www.blackcatsystems.com/software/multimode.html)**, **[MultiPSK](http://f6cte.free.fr/index_anglais.htm)**, **[SeaTTY](http://www.dxsoft.com/en/products/seatty/)**, **[Sorcerer](http://www.kd0cq.com/2013/07/sorcerer-decoder-download/)** and **[WinWarbler](http://www.dxlabsuite.com/winwarbler/)**

#### <font color="blue"><ins>Additional links:</ins></font>
RTTY:

* Websites: **[Radioteletype on Wikipedia](https://en.wikipedia.org/wiki/Radioteletype)**, **[W1AW digital transmissions](http://www.arrl.org/digital-transmissions)**, **[Scancat info](http://www.scancat.com/rvw-faqc.html)**

### <font color="green"><ins>VarAC - to be completed</ins></font>
