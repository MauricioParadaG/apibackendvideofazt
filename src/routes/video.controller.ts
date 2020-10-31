import { Response, RequestHandler } from "express";
import Video from "./Video";

export const createVideo:RequestHandler = async (req,res) => {
    const videoFound = await Video.findOne({url : req.body.url});
    if(videoFound) {
        return res.status(301).json({msg: 'This video URL was already created'});
    }

    const video =  new Video(req.body);
    const savedVideo = await video.save();
    res.json(savedVideo);
};

export const getVideos: RequestHandler = async (req, res) => {
    try {
        const videos = await Video.find().sort({created: -1});
        return res.json(videos);
    } catch (error) {
        console.log(error);
        res.json(error);
        //res.status(500).send('There was an error while getting the posted videos');
    }
};

export const getVideo:RequestHandler = async (req,res) => {
    const videoFound = await Video.findById(req.params.id);
    if (!videoFound) return res.status(204).json({msg: 'Not video founded'});
    res.json(videoFound);
};

export const deleteVideo:RequestHandler = async (req,res) => {
    const videoDeleted = await Video.findByIdAndDelete(req.params.id);
    if (!videoDeleted) return res.status(204).json({msg: 'Not video was deleted'});
    res.json(videoDeleted);
};

export const updateVideo:RequestHandler = async (req,res) => {
    const videoUpdate = await Video.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if (!videoUpdate) return res.status(204).json();
    res.json(videoUpdate);
};

