var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Manual",
    "title": "Manual",
    "category": "page",
    "text": "DocTestSetup = quote\n    using CorrNoise\nend"
},

{
    "location": "#CorrNoise-User\'s-Manual-1",
    "page": "Manual",
    "title": "CorrNoise User\'s Manual",
    "category": "section",
    "text": "CorrNoise provides a number of pseudo-random number generators.To install CorrNoise, start Julia and type the following command:Pkg.clone(\"https://github.com/lspestrip/CorrNoise\")To run the test suite, type the following command:Pkg.test(\"CorrNoise\")"
},

{
    "location": "#Documentation-1",
    "page": "Manual",
    "title": "Documentation",
    "category": "section",
    "text": "The documentation was built using Documenter.jl.using Dates # hide\nprintln(\"Documentation built $(now()) with Julia $(VERSION).\") # hide"
},

{
    "location": "#Random-number-generators-1",
    "page": "Manual",
    "title": "Random number generators",
    "category": "section",
    "text": "Although Julia already implements a number of pseudo-random number generators, CorrNoise implements its own generators. We employ the same algorithms used in the pipeline of the ESA Planck/LFI instrument, which provided several types of distributions:Uniform distribution (Flat128RNG), with period 2^128;\nGaussian distribution (GaussRNG);\n1f^2\ndistribution (Oof2RNG);\n1f^α\ndistribution, with α  2  (OofRNG).Each generator but Flat128RNG uses a simpler generator internally. This generator must sample from a given distribution, but it does not need to be a generator provided by CorrNoise. For instance, the Gaussian generator GaussRNG employs an uniform generator, which can either be Flat128RNG or one of the generators provided by Julia like MersenneTwister. For instance, here is an example which shows how to use Flat128RNG:using CorrNoise # hide\ngauss1 = GaussRNG(initflatrng128(1234))\nprint([randn(gauss1) for i in 1:4])We use initflatrng128, as it creates a Flat128RNG object with some sensible defaults (specifically, it is configured to produce the same sequence of random numbers as the ones produced by the Planck/HFI pipeline, if the seeds are the same). And here is the same example, using a MersenneTwister generator:gauss2 = GaussRNG(MersenneTwister(1234))\nprint([randn(gauss2) for i in 1:4])Of course, the numbers are different. They are however drawn from the same distribution (Gaussian curve with mean 0 and σ=1)."
},

{
    "location": "#CorrNoise.Flat128RNG",
    "page": "Manual",
    "title": "CorrNoise.Flat128RNG",
    "category": "type",
    "text": "Flat128RNG\n\nState of the base-128 uniform random generator. Initialize this using the function initflatrng128.\n\n\n\n\n\n"
},

{
    "location": "#CorrNoise.initflatrng128",
    "page": "Manual",
    "title": "CorrNoise.initflatrng128",
    "category": "function",
    "text": "initflatrng128(xstart = 123456789, ystart = 362436069, zstart = 521288629, wstart = 88675123)\n\nInitialize a flat random number generator with period 2^128. To draw random numbers, use the Base.rand function as usual.\n\nExample:\n\nrng = initflatrng128()\nprint([rand(rng) for i in 1:4])\n\n\n\n\n\n"
},

{
    "location": "#Uniform-generator-1",
    "page": "Manual",
    "title": "Uniform generator",
    "category": "section",
    "text": "Flat128RNG\ninitflatrng128"
},

{
    "location": "#CorrNoise.GaussRNG",
    "page": "Manual",
    "title": "CorrNoise.GaussRNG",
    "category": "type",
    "text": "GaussRNG(flatrng::AbstractRNG)\nGaussRNG(seed=0)\n\nInitialize a Gaussian RNG. The parameter flatrng must be a uniform RNG. If a seed is used, then a MersenneTwister RNG is used.\n\n\n\n\n\n"
},

{
    "location": "#Gaussian-generator-1",
    "page": "Manual",
    "title": "Gaussian generator",
    "category": "section",
    "text": "GaussRNG"
},

{
    "location": "#CorrNoise.Oof2RNG",
    "page": "Manual",
    "title": "CorrNoise.Oof2RNG",
    "category": "type",
    "text": "Oof2RNG(normrng, fmin, fknee, fsample)\n\nCreate a Oof2RNG RNG object. It requires a gaussian RNG generator in normrng (use GaussRNG), the minimum frequency (longest period) in fmin, the knee frequency and the sampling frequency. The measure unit of the three frequencies must be the same (e.g., Hz).\n\nUse randoof2 to draw samples from a Oof2RNG object, as in the following example:\n\nrng = Oof2RNG(GaussRNG(), 1e-3, 1.0, 1e2)\nprint([randoof2(rng) for i in 1:4])\n\n\n\n\n\n"
},

{
    "location": "#1/f2-generator-1",
    "page": "Manual",
    "title": "1f^2 generator",
    "category": "section",
    "text": "Oof2RNG"
},

{
    "location": "#CorrNoise.OofRNG",
    "page": "Manual",
    "title": "CorrNoise.OofRNG",
    "category": "type",
    "text": "OofRNG(normrng, slope, fmin, fknee, fsample)\n\nCreate a OofRNG RNG object. It requires a gaussian RNG generator in normrng (use GaussRNG), the slope α of the noise in slope, the minimum frequency (longest period) in fmin, the knee frequency and the sampling frequency. The measure unit of the three frequencies must be the same (e.g., Hz).\n\nUse randoof to draw samples from a OofRNG object, as in the following example:\n\nrng = OofRNG(GaussRNG(), -1.5, 1e-3, 1.0, 1e2)\nprint([randoof(rng) for i in 1:4])\n\n\n\n\n\n"
},

{
    "location": "#1/fα-generator-(with-α-2)-1",
    "page": "Manual",
    "title": "1f^α generator (with α  2)",
    "category": "section",
    "text": "OofRNG"
},

]}
