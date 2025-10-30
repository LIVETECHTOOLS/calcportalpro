'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calculator, 
  Clock, 
  Calendar, 
  TrendingUp, 
  Copy,
  Share2,
  AlertCircle,
  Plus,
  Minus
} from 'lucide-react';

interface TimeFormData {
  calculationType: 'difference' | 'addition' | 'working-hours' | 'conversion';
  startTime: string;
  endTime: string;
  duration: {
    hours: number;
    minutes: number;
    seconds: number;
  };
  breakTime: {
    hours: number;
    minutes: number;
  };
  fromUnit: 'seconds' | 'minutes' | 'hours' | 'days';
  toUnit: 'seconds' | 'minutes' | 'hours' | 'days';
  timeValue: number;
}

interface TimeResults {
  duration: {
    hours: number;
    minutes: number;
    seconds: number;
    totalSeconds: number;
    totalMinutes: number;
    totalHours: number;
    totalDays: number;
  };
  endTime?: string;
  workingHours?: {
    netWorkTime: {
      hours: number;
      minutes: number;
      seconds: number;
    };
    breakTime: {
      hours: number;
      minutes: number;
      totalMinutes: number;
    };
  };
  conversion?: {
    fromValue: number;
    fromUnit: string;
    toValue: number;
    toUnit: string;
  };
}

export default function TimeCalculator() {
  const [formData, setFormData] = useState<TimeFormData>({
    calculationType: 'difference',
    startTime: '09:00',
    endTime: '17:00',
    duration: { hours: 0, minutes: 30, seconds: 0 },
    breakTime: { hours: 1, minutes: 0 },
    fromUnit: 'hours',
    toUnit: 'minutes',
    timeValue: 2.5
  });

  const [results, setResults] = useState<TimeResults | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  // Calculate time whenever form data changes
  const calculateTimeDifference = useCallback((): TimeResults => {
    const start = parseTime(formData.startTime);
    const end = parseTime(formData.endTime);
    
    let diffSeconds = end - start;
    if (diffSeconds < 0) diffSeconds += 24 * 3600; // Handle overnight

    return {
      duration: secondsToDuration(diffSeconds)
    };
  }, [formData]);

  const calculateTimeAddition = useCallback((): TimeResults => {
    const start = parseTime(formData.startTime);
    const durationSeconds = formData.duration.hours * 3600 + 
                          formData.duration.minutes * 60 + 
                          formData.duration.seconds;
    
    const endSeconds = start + durationSeconds;
    const endTime = formatTime(endSeconds % (24 * 3600));

    return {
      duration: secondsToDuration(durationSeconds),
      endTime
    };
  }, [formData]);

  const calculateWorkingHours = useCallback((): TimeResults => {
    const start = parseTime(formData.startTime);
    const end = parseTime(formData.endTime);
    
    let workSeconds = end - start;
    if (workSeconds < 0) workSeconds += 24 * 3600;

    const breakSeconds = formData.breakTime.hours * 3600 + formData.breakTime.minutes * 60;
    const netWorkSeconds = Math.max(0, workSeconds - breakSeconds);

    return {
      duration: secondsToDuration(workSeconds),
      workingHours: {
        netWorkTime: secondsToDuration(netWorkSeconds),
        breakTime: {
          hours: formData.breakTime.hours,
          minutes: formData.breakTime.minutes,
          totalMinutes: formData.breakTime.hours * 60 + formData.breakTime.minutes
        }
      }
    };
  }, [formData]);

  const calculateTimeConversion = useCallback((): TimeResults => {
    const fromSeconds = convertToSeconds(formData.timeValue, formData.fromUnit);
    const toValue = convertFromSeconds(fromSeconds, formData.toUnit);

    return {
      duration: secondsToDuration(fromSeconds),
      conversion: {
        fromValue: formData.timeValue,
        fromUnit: formData.fromUnit,
        toValue,
        toUnit: formData.toUnit
      }
    };
  }, [formData]);

  const calculateTime = useCallback(() => {
    setIsCalculating(true);

    setTimeout(() => {
      let newResults: TimeResults;

      switch (formData.calculationType) {
        case 'difference':
          newResults = calculateTimeDifference();
          break;
        case 'addition':
          newResults = calculateTimeAddition();
          break;
        case 'working-hours':
          newResults = calculateWorkingHours();
          break;
        case 'conversion':
          newResults = calculateTimeConversion();
          break;
        default:
          newResults = calculateTimeDifference();
      }

      setResults(newResults);
      setIsCalculating(false);
    }, 500);
  }, [formData, calculateTimeDifference, calculateTimeAddition, calculateWorkingHours, calculateTimeConversion]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      calculateTime();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [calculateTime]);

  const parseTime = (timeString: string): number => {
    const [hours, minutes] = timeString.split(':').map(Number);
    return hours * 3600 + minutes * 60;
  };

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  };

  const secondsToDuration = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    return {
      hours,
      minutes,
      seconds,
      totalSeconds: totalSeconds,
      totalMinutes: totalSeconds / 60,
      totalHours: totalSeconds / 3600,
      totalDays: totalSeconds / (24 * 3600)
    };
  };

  const convertToSeconds = (value: number, unit: string): number => {
    switch (unit) {
      case 'seconds': return value;
      case 'minutes': return value * 60;
      case 'hours': return value * 3600;
      case 'days': return value * 24 * 3600;
      default: return value;
    }
  };

  const convertFromSeconds = (seconds: number, unit: string): number => {
    switch (unit) {
      case 'seconds': return seconds;
      case 'minutes': return seconds / 60;
      case 'hours': return seconds / 3600;
      case 'days': return seconds / (24 * 3600);
      default: return seconds;
    }
  };

  const updateFormData = (field: keyof TimeFormData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const updateDuration = (field: keyof typeof formData.duration, value: number) => {
    setFormData(prev => ({
      ...prev,
      duration: { ...prev.duration, [field]: value }
    }));
  };

  const updateBreakTime = (field: keyof typeof formData.breakTime, value: number) => {
    setFormData(prev => ({
      ...prev,
      breakTime: { ...prev.breakTime, [field]: value }
    }));
  };

  const copyResults = () => {
    if (results) {
      let text = 'Time Calculator Results:\n';
      
      if (formData.calculationType === 'difference') {
        text += `Duration: ${results.duration.hours}h ${results.duration.minutes}m ${results.duration.seconds}s`;
      } else if (formData.calculationType === 'addition') {
        text += `Duration: ${results.duration.hours}h ${results.duration.minutes}m ${results.duration.seconds}s\n`;
        text += `End Time: ${results.endTime}`;
      } else if (formData.calculationType === 'working-hours') {
        text += `Total Time: ${results.duration.hours}h ${results.duration.minutes}m\n`;
        text += `Net Work Time: ${results.workingHours!.netWorkTime.hours}h ${results.workingHours!.netWorkTime.minutes}m`;
      } else if (formData.calculationType === 'conversion') {
        text += `${results.conversion!.fromValue} ${results.conversion!.fromUnit} = ${results.conversion!.toValue.toFixed(2)} ${results.conversion!.toUnit}`;
      }
      
      navigator.clipboard.writeText(text);
    }
  };

  const shareResults = () => {
    if (results) {
      let text = 'Check out my time calculation! ';
      
      if (formData.calculationType === 'difference') {
        text += `Duration: ${results.duration.hours}h ${results.duration.minutes}m. `;
      } else if (formData.calculationType === 'addition') {
        text += `Added ${results.duration.hours}h ${results.duration.minutes}m to get ${results.endTime}. `;
      } else if (formData.calculationType === 'working-hours') {
        text += `Worked ${results.workingHours!.netWorkTime.hours}h ${results.workingHours!.netWorkTime.minutes}m (with breaks). `;
      } else if (formData.calculationType === 'conversion') {
        text += `${results.conversion!.fromValue} ${results.conversion!.fromUnit} = ${results.conversion!.toValue.toFixed(2)} ${results.conversion!.toUnit}. `;
      }
      
      text += 'Calculated with CalcPortal Pro.';
      
      if (navigator.share) {
        navigator.share({
          title: 'My Time Calculation',
          text: text,
          url: window.location.href
        });
      } else {
        navigator.clipboard.writeText(text);
      }
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
          <Clock className="w-8 h-8 text-primary-600" />
        </div>
        <h2 className="text-2xl font-bold text-secondary-600 mb-2">
          Time Calculator
        </h2>
        <p className="text-gray-600">
          Calculate time differences, duration, and conversions
        </p>
      </div>

      {/* Calculation Type Selection */}
      <div className="bg-gray-50 rounded-lg p-4">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Calculation Type
        </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {([
            { type: 'difference', label: 'Time Difference', icon: Minus },
            { type: 'addition', label: 'Add Time', icon: Plus },
            { type: 'working-hours', label: 'Working Hours', icon: Clock },
            { type: 'conversion', label: 'Convert Time', icon: TrendingUp }
          ] as const).map(({ type, label, icon: Icon }) => (
                <button
                  type="button"
              key={type}
              onClick={() => updateFormData('calculationType', type)}
              className={`p-3 rounded-lg border-2 transition-all ${
                formData.calculationType === type
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full mb-2 ${
                formData.calculationType === type ? 'bg-primary-100' : 'bg-gray-100'
              }`}>
                <Icon className="w-4 h-4 text-primary-600" />
              </div>
              <div className="text-xs font-medium text-center">{label}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Input Form */}
      <div className="space-y-6">
        {/* Time Difference & Addition Inputs */}
        {(formData.calculationType === 'difference' || formData.calculationType === 'addition') && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Start Time
              </label>
              <input
                type="time"
                value={formData.startTime}
                onChange={(e) => updateFormData('startTime', e.target.value)}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {formData.calculationType === 'difference' ? 'End Time' : 'Duration'}
              </label>
              {formData.calculationType === 'difference' ? (
                <input
                  type="time"
                  value={formData.endTime}
                  onChange={(e) => updateFormData('endTime', e.target.value)}
                  className="input-field"
                />
              ) : (
                <div className="grid grid-cols-3 gap-2">
                  <input
                    type="number"
                    placeholder="Hours"
                    value={formData.duration.hours}
                    onChange={(e) => updateDuration('hours', parseInt(e.target.value) || 0)}
                    className="input-field"
                    min="0"
                    max="24"
                  />
                  <input
                    type="number"
                    placeholder="Minutes"
                    value={formData.duration.minutes}
                    onChange={(e) => updateDuration('minutes', parseInt(e.target.value) || 0)}
                    className="input-field"
                    min="0"
                    max="59"
                  />
                  <input
                    type="number"
                    placeholder="Seconds"
                    value={formData.duration.seconds}
                    onChange={(e) => updateDuration('seconds', parseInt(e.target.value) || 0)}
                    className="input-field"
                    min="0"
                    max="59"
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Working Hours Inputs */}
        {formData.calculationType === 'working-hours' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Start Time
              </label>
              <input
                type="time"
                value={formData.startTime}
                onChange={(e) => updateFormData('startTime', e.target.value)}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                End Time
              </label>
              <input
                type="time"
                value={formData.endTime}
                onChange={(e) => updateFormData('endTime', e.target.value)}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Break Time
              </label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  placeholder="Hours"
                  value={formData.breakTime.hours}
                  onChange={(e) => updateBreakTime('hours', parseInt(e.target.value) || 0)}
                  className="input-field"
                  min="0"
                  max="24"
                />
                <input
                  type="number"
                  placeholder="Minutes"
                  value={formData.breakTime.minutes}
                  onChange={(e) => updateBreakTime('minutes', parseInt(e.target.value) || 0)}
                  className="input-field"
                  min="0"
                  max="59"
                />
              </div>
            </div>
          </div>
        )}

        {/* Time Conversion Inputs */}
        {formData.calculationType === 'conversion' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                From
              </label>
              <select
                value={formData.fromUnit}
                onChange={(e) => updateFormData('fromUnit', e.target.value)}
                className="input-field"
              >
                <option value="seconds">Seconds</option>
                <option value="minutes">Minutes</option>
                <option value="hours">Hours</option>
                <option value="days">Days</option>
              </select>
            </div>
            <div>
              <label className="block text sm font-medium text-gray-700 mb-2">
                Value
              </label>
              <input
                type="number"
                value={formData.timeValue}
                onChange={(e) => updateFormData('timeValue', parseFloat(e.target.value) || 0)}
                className="input-field"
                step="0.01"
                min="0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                To
              </label>
              <select
                value={formData.toUnit}
                onChange={(e) => updateFormData('toUnit', e.target.value)}
                className="input-field"
              >
                <option value="seconds">Seconds</option>
                <option value="minutes">Minutes</option>
                <option value="hours">Hours</option>
                <option value="days">Days</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Results */}
      <AnimatePresence>
        {results && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-6 border border-primary-200"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-secondary-600 mb-2">
                Your Time Results
              </h3>
              <p className="text-gray-600">
                {formData.calculationType === 'difference' && 'Time difference calculation'}
                {formData.calculationType === 'addition' && 'Time addition calculation'}
                {formData.calculationType === 'working-hours' && 'Working hours calculation'}
                {formData.calculationType === 'conversion' && 'Time conversion'}
              </p>
            </div>

            {/* Primary Results */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Duration */}
              <div className="bg-white rounded-xl p-4 text-center shadow-soft">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-primary-600" />
                </div>
                <div className="text-2xl font-bold text-primary-600 mb-1">
                  {results.duration.hours}h {results.duration.minutes}m
                </div>
                <div className="text-sm text-gray-600">Duration</div>
              </div>

              {/* Additional Results based on type */}
              {formData.calculationType === 'addition' && results.endTime && (
                <div className="bg-white rounded-xl p-4 text-center shadow-soft">
                  <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Calendar className="w-6 h-6 text-accent-600" />
                  </div>
                  <div className="text-2xl font-bold text-accent-600 mb-1">
                    {results.endTime}
                  </div>
                  <div className="text-sm text-gray-600">End Time</div>
                </div>
              )}

              {formData.calculationType === 'working-hours' && results.workingHours && (
                <div className="bg-white rounded-xl p-4 text-center shadow-soft">
                  <div className="w-12 h-12 bg-accent-100 rounded-full flex items center justify-center mx-auto mb-3">
                    <TrendingUp className="w-6 h-6 text-accent-600" />
                  </div>
                  <div className="text-2xl font-bold text-accent-600 mb-1">
                    {results.workingHours.netWorkTime.hours}h {results.workingHours.netWorkTime.minutes}m
                  </div>
                  <div className="text-sm text-gray-600">Net Work Time</div>
                </div>
              )}

              {formData.calculationType === 'conversion' && results.conversion && (
                <div className="bg-white rounded-xl p-4 text-center shadow-soft">
                  <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Calculator className="w-6 h-6 text-accent-600" />
                  </div>
                  <div className="text-2xl font-bold text-accent-600 mb-1">
                    {results.conversion.toValue.toFixed(2)}
                  </div>
                  <div className="text-sm text-gray-600">{results.conversion.toUnit}</div>
                </div>
              )}

              {/* Total Time in different units */}
              <div className="bg-white rounded-xl p-4 text-center shadow-soft">
                <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-secondary-600" />
                </div>
                <div className="text-lg font-bold text-secondary-600 mb-1">
                  {results.duration.totalMinutes.toFixed(1)}m
                </div>
                <div className="text-sm text-gray-600">Total Minutes</div>
              </div>
            </div>

            {/* Detailed Results */}
            <div className="bg-white rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-gray-800 mb-3">Detailed Breakdown</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Hours:</span>
                  <span className="ml-2 font-medium">{results.duration.hours}</span>
                </div>
                <div>
                  <span className="text-gray-600">Minutes:</span>
                  <span className="ml-2 font-medium">{results.duration.minutes}</span>
                </div>
                <div>
                  <span className="text-gray-600">Seconds:</span>
                  <span className="ml-2 font-medium">{results.duration.seconds}</span>
                </div>
                <div>
                  <span className="text-gray-600">Total Hours:</span>
                  <span className="ml-2 font-medium">{results.duration.totalHours.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={copyResults}
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary-600 text-white rounded-lg hover:bg-secondary-700 transition-colors"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy Results
              </button>
              <button
                type="button"
                onClick={shareResults}
                className="inline-flex items-center justify-center px-6 py-3 bg-accent-600 text-white rounded-lg hover:bg-accent-700 transition-colors"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share Results
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading State */}
      <AnimatePresence>
        {isCalculating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-8"
          >
            <div className="inline-flex items-center space-x-2 text-accent-600">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-accent-600"></div>
              <span>Calculating time...</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Info Box */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
        <div className="flex">
          <div className="flex-shrink-0">
            <AlertCircle className="h-5 w-5 text-blue-400" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-700">
              <strong>Note:</strong> This calculator provides time calculations based on 24-hour format. 
              For overnight calculations, the calculator automatically handles day transitions. 
              All calculations are estimates and should be verified for critical applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
