import { FlightService } from "./flight.service.js"
import { AppError, catchAsync } from "../../errors/index.js"

const flightService = new FlightService(); 

export const findAllFlight = catchAsync(async (req, res, next) => {
    const flights = await flightService.findAll();
  
    return res.status(200).json(flights);
});


export const createFlight = catchAsync(async (req, res, next) => {
    const { hasError, errorMessages, flightData } = validateFlight(req.body);
  
    if (hasError) {
      return res.status(422).json({
        status: 'error',
        message: errorMessages,
      });
    }
  
    const flight = await flightService.create(flightData);
  
    return res.status(200).json(flight);
});


export const findOneFlight = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { status } = req.query;

  const flight = await flightService.findOne(id, status)

  if (!flight) {
    return next(new AppError(`flight with id: ${id} not found!`, 400));
  }

  return res.status(200).json(flight);

})

export const updateFlight = catchAsync(async (req, res, next) => {
    const { hasError, errorMessages, flightData } = validatePartialFlight(
      req.body
    );
  
    if (hasError) {
      return res.status(422).json({
        status: 'error',
        message: errorMessages,
      });
    }
  
    const { id } = req.params;
  
    const flight = await flightService.findOne(id);
  
    if (!flight) {
      return next(new AppError(`flight with id: ${id} not found!`));
    }
  
    const updatedFlight = await flightService.update(flight, flightData);
  
    return res.status(200).json(updatedFlight);
});

export const deleteFlight = catchAsync(async (req, res, next) => {
    const { id } = req.params;
  
    const flight = await flightService.findOne(id, 'pending');
  
    if (!flight) {
      return next(new AppError(`can't find flight with id: ${id}`));
    } 
  
    const ticket = await ticketService.findOneTicketByFlightId(id)
  
    if(ticket){
      return next(
        new AppError(
          `a flight cannot be deleted if tickets have been for it`,
          400
        )
      )
    }
  
    await flightService.delete(flight);
  
    return res.status(204).json(null);
  });